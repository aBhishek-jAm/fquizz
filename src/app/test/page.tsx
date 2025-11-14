"use client";

import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { TestContext } from '@/context/TestContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { codingQuestions, aptitudeQuestions } from '@/lib/questions';
import type { Question } from '@/lib/types';
import Timer from '@/components/Timer';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const SECTIONS = {
  CODING: 'CODING',
  APTITUDE: 'APTITUDE',
};

export default function TestPage() {
  const router = useRouter();
  const context = useContext(TestContext);
  
  const [currentSection, setCurrentSection] = useState(SECTIONS.CODING);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    if (!context?.isTestStarted) {
      router.replace('/');
    }
  }, [context?.isTestStarted, router]);

  if (!context) {
    return null; // Or a loading spinner
  }

  const { timeLeft, setAnswer, answers, submitTest, isSubmitting } = context;

  const questions: Question[] = currentSection === SECTIONS.CODING ? codingQuestions : aptitudeQuestions;
  const currentQuestion: Question = questions[currentQuestionIndex];
  
  const totalQuestions = codingQuestions.length + aptitudeQuestions.length;
  const questionsAnswered = Object.keys(answers).length;
  const progressValue = (questionsAnswered / totalQuestions) * 100;

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentSection === SECTIONS.CODING) {
      setCurrentSection(SECTIONS.APTITUDE);
      setCurrentQuestionIndex(0);
    } else {
      submitTest();
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSectionSubmit = () => {
      setCurrentSection(SECTIONS.APTITUDE);
      setCurrentQuestionIndex(0);
  };

  if (!currentQuestion) {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <p>Loading question...</p>
        </div>
    );
  }

  return (
    <>
      <header className="sticky top-0 z-10 w-full bg-card shadow-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="font-headline text-xl font-bold text-primary">ExamFlow</div>
          <Timer timeLeft={timeLeft} />
        </div>
        <Progress value={progressValue} className="h-1 rounded-none" />
      </header>
      <main className="container mx-auto flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <Card className="w-full max-w-4xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-xl font-medium">
                Question {currentSection === SECTIONS.CODING ? currentQuestionIndex + 1 : currentQuestionIndex + 1 + codingQuestions.length} of {totalQuestions}
            </CardTitle>
            <p className="text-sm text-muted-foreground">{currentSection === SECTIONS.CODING ? 'Section: Coding (C, Python, Java)' : 'Section: Logical Reasoning & Aptitude'}</p>
          </CardHeader>
          <Separator />
          <CardContent className="py-6">
            <div className="space-y-6">
              <p className="text-lg font-semibold whitespace-pre-wrap font-body leading-relaxed">{currentQuestion.question}</p>
              {currentQuestion.language && (
                <pre className="bg-muted p-4 rounded-md text-sm font-code overflow-x-auto"><code>{currentQuestion.question}</code></pre>
              )}
              <RadioGroup
                value={answers[currentQuestion.id] || ''}
                onValueChange={(value) => setAnswer(currentQuestion.id, value)}
                className="space-y-4 text-base"
              >
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <RadioGroupItem value={option} id={`option-${index}`} />
                    <Label htmlFor={`option-${index}`} className="font-normal cursor-pointer text-md">{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </CardContent>
          <Separator />
          <CardFooter className="flex justify-between p-6">
            <Button onClick={handlePrevious} variant="outline" disabled={currentQuestionIndex === 0}>
              Previous
            </Button>
            {currentSection === SECTIONS.CODING && currentQuestionIndex === questions.length - 1 ? (
                <Button onClick={handleSectionSubmit} className="bg-primary hover:bg-primary/90">
                    Submit Section & Proceed
                </Button>
            ) : currentSection === SECTIONS.APTITUDE && currentQuestionIndex === questions.length - 1 ? (
                <Button onClick={submitTest} variant="destructive" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Test'}
                </Button>
            ) : (
                <Button onClick={handleNext}>Next</Button>
            )}
          </CardFooter>
        </Card>
        
        {currentSection === SECTIONS.APTITUDE && currentQuestionIndex === questions.length -1 && (
            <Alert variant="destructive" className="mt-8 max-w-4xl w-full">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Final Step!</AlertTitle>
                <AlertDescription>
                    Clicking "Submit Test" will end the exam and record your score. You will not be able to change your answers.
                </AlertDescription>
            </Alert>
        )}
      </main>
    </>
  );
}
