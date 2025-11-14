"use client";

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TestContext } from '@/context/TestContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { CheckCircle, Award } from 'lucide-react';
import { codingQuestions, aptitudeQuestions } from '@/lib/questions';

export default function ResultPage() {
  const router = useRouter();
  const context = useContext(TestContext);

  useEffect(() => {
    if (!context?.isSubmitting && !context?.studentDetails) {
        // Allow access if test was submitted, even after refresh
        // A better check would be to see if results exist in DB for this user
        // For now, if context is gone, just redirect.
      router.replace('/');
    }
  }, [context, router]);

  if (!context) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-4">
            <p>Loading results...</p>
        </div>
    );
  }

  const { studentDetails, codingScore, aptitudeScore } = context;

  const totalCoding = codingQuestions.length;
  const totalAptitude = aptitudeQuestions.length;

  const totalScore = codingScore + aptitudeScore;
  const totalQuestions = totalCoding + totalAptitude;
  
  const percentage = totalQuestions > 0 ? (totalScore / totalQuestions) * 100 : 0;


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-2xl shadow-2xl text-center">
        <CardHeader>
          <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-4">
            <Award className="h-10 w-10" />
          </div>
          <CardTitle className="font-headline text-3xl">Test Completed!</CardTitle>
          <CardDescription className="text-lg">
            Thank you, {studentDetails?.fullName || 'student'}, for taking the test. Here are your results.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-secondary-foreground">Coding Score</h3>
              <p className="text-5xl font-bold text-primary">{codingScore}<span className="text-3xl text-muted-foreground">/{totalCoding}</span></p>
            </div>
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-secondary-foreground">Aptitude Score</h3>
              <p className="text-5xl font-bold text-primary">{aptitudeScore}<span className="text-3xl text-muted-foreground">/{totalAptitude}</span></p>
            </div>
          </div>
          <div className="bg-card border p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-foreground">Total Score</h3>
            <p className="text-6xl font-bold text-primary">{totalScore}<span className="text-4xl text-muted-foreground">/{totalQuestions}</span></p>
            <p className="text-2xl font-semibold text-accent-foreground mt-2">{percentage.toFixed(2)}%</p>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2 pt-6">
          <CheckCircle className="h-8 w-8 text-green-600 mb-2" />
          <p className="text-muted-foreground">Your results have been successfully submitted.</p>
          <Button onClick={() => router.push('/')} className="mt-4">
            Back to Home
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
