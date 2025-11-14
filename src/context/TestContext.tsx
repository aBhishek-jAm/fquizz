
"use client";

import React, { createContext, useState, useCallback, ReactNode, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { allQuestions, codingQuestions, aptitudeQuestions } from '@/lib/questions';
import type { StudentDetails } from '@/lib/types';
import { useFirestore, useUser } from '@/firebase';
import { collection, doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { FirestorePermissionError } from '@/firebase/errors';
import { errorEmitter } from '@/firebase/error-emitter';

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
  const firestore = useFirestore();
  const { user } = useUser();

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

    if (studentDetails && user) {
        const studentRef = doc(firestore, "students", user.uid);
        const studentPayload = { ...studentDetails, id: user.uid };
        
        const testResultRef = doc(collection(firestore, `students/${user.uid}/testResults`));
        const testResultPayload = {
            studentId: user.uid,
            codingScore,
            aptitudeScore,
            timestamp: serverTimestamp(),
            browserInfo: navigator.userAgent,
            warningsCount: warningCount,
            id: testResultRef.id,
            studentName: studentDetails.fullName,
        };

        try {
          await setDoc(studentRef, studentPayload, { merge: true });
          await setDoc(testResultRef, testResultPayload);
          router.replace('/result');
        } catch (error: any) {
            console.error("Error submitting test:", error);

            if (error.name === 'FirebaseError') {
              const path = (error.customData?._path as string) || testResultRef.path;
              const permissionError = new FirestorePermissionError({
                  path,
                  operation: 'create',
                  requestResourceData: testResultPayload,
              });
              errorEmitter.emit('permission-error', permissionError);
            }

            toast({
                title: "Submission Error",
                description: "There was a problem submitting your test results. Please try again.",
                variant: "destructive",
            });
            setIsSubmitting(false); // Allow retry
        }

    } else {
        toast({
            title: "Submission Error",
            description: "Could not submit test. User or student details missing.",
            variant: "destructive",
        });
        setIsSubmitting(false);
    }
  }, [calculateScores, studentDetails, warningCount, router, toast, isSubmitting, firestore, user]);

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
    if (!user) {
        toast({
            title: "Authentication Error",
            description: "Please wait a moment for authentication to complete.",
            variant: "destructive"
        });
        return;
    }
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
