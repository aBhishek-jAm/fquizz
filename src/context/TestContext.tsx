"use client";

import React, { createContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { allQuestions, codingQuestions, aptitudeQuestions } from '@/lib/questions';
import type { StudentDetails } from '@/lib/types';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface TestContextType {
  studentDetails: StudentDetails | null;
  saveStudentDetails: (details: StudentDetails) => void;
  answers: Record<number, string>;
  setAnswer: (questionId: number, answer: string) => void;
  timeLeft: number;
  isTestStarted: boolean;
  startTest: () => void;
  submitTest: () => Promise<void>;
  warningCount: number;
  handleTabSwitch: () => void;
  codingScore: number;
  aptitudeScore: number;
  isSubmitting: boolean;
}

export const TestContext = createContext<TestContextType | null>(null);

const TEST_DURATION = 60 * 60; // 60 minutes in seconds

export const TestProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [studentDetails, setStudentDetails] = useState<StudentDetails | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(TEST_DURATION);
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [warningCount, setWarningCount] = useState(0);
  const [codingScore, setCodingScore] = useState(0);
  const [aptitudeScore, setAptitudeScore] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const { toast } = useToast();

  const calculateScores = useCallback(() => {
    let currentCodingScore = 0;
    let currentAptitudeScore = 0;

    for (const question of allQuestions) {
      if (answers[question.id] === question.answer) {
        if (question.category === 'coding') {
          currentCodingScore++;
        } else if (question.category === 'aptitude') {
          currentAptitudeScore++;
        }
      }
    }
    
    setCodingScore(currentCodingScore);
    setAptitudeScore(currentAptitudeScore);

    return { codingScore: currentCodingScore, aptitudeScore: currentAptitudeScore };
  }, [answers]);

  const submitTest = useCallback(async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setIsTestStarted(false);

    const { codingScore, aptitudeScore } = calculateScores();

    if (studentDetails) {
      try {
        await addDoc(collection(db, "results"), {
          ...studentDetails,
          codingScore,
          aptitudeScore,
          totalCoding: codingQuestions.length,
          totalAptitude: aptitudeQuestions.length,
          submittedAt: serverTimestamp(),
          warningCount,
          userAgent: navigator.userAgent,
        });
      } catch (error) {
        console.error("Error writing document: ", error);
        toast({
          title: "Submission Error",
          description: "Could not save your test results. Please contact the administrator.",
          variant: "destructive",
        });
      }
    }
    router.replace('/result');
  }, [calculateScores, studentDetails, warningCount, router, toast, isSubmitting]);

  const handleTabSwitch = useCallback(() => {
    if (!isTestStarted) return;
    
    const newWarningCount = warningCount + 1;
    setWarningCount(newWarningCount);

    if (newWarningCount >= 2) {
      toast({
        title: "Test Auto-Submitted",
        description: "You have switched tabs more than once.",
        variant: "destructive",
      });
      submitTest();
    } else {
      toast({
        title: "Warning: Tab Switch Detected",
        description: `You have switched tabs. This is your ${newWarningCount}/2 warning. One more will result in auto-submission.`,
        variant: "destructive",
      });
    }
  }, [warningCount, submitTest, toast, isTestStarted]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isTestStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (isTestStarted && timeLeft <= 0) {
      toast({
        title: "Time's Up!",
        description: "Your test is being submitted automatically.",
      });
      submitTest();
    }
    return () => clearInterval(timer);
  }, [isTestStarted, timeLeft, submitTest, toast]);
  
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleTabSwitch();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [handleTabSwitch]);

  const saveStudentDetails = (details: StudentDetails) => {
    setStudentDetails(details);
  };

  const setAnswer = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const startTest = () => {
    setTimeLeft(TEST_DURATION);
    setIsTestStarted(true);
    router.push('/test');
  };

  return (
    <TestContext.Provider
      value={{
        studentDetails,
        saveStudentDetails,
        answers,
        setAnswer,
        timeLeft,
        isTestStarted,
        startTest,
        submitTest,
        warningCount,
        handleTabSwitch,
        codingScore,
        aptitudeScore,
        isSubmitting,
      }}
    >
      {children}
    </TestContext.Provider>
  );
};
