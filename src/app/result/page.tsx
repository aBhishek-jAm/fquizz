"use client";

import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useCollection, useFirestore, useUser, useMemoFirebase } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { CheckCircle, Award } from 'lucide-react';
import { codingQuestions, aptitudeQuestions } from '@/lib/questions';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import type { TestResult } from '@/lib/types';


export default function ResultPage() {
  const router = useRouter();
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const testResultsQuery = useMemoFirebase(() => {
    if (!user) return null;
    return query(
        collection(firestore, `students/${user.uid}/testResults`),
        orderBy('timestamp', 'desc'),
        limit(1)
    );
  }, [firestore, user]);

  const { data: results, isLoading: isResultsLoading } = useCollection<TestResult>(testResultsQuery);

  const latestResult = useMemo(() => (results && results.length > 0 ? results[0] : null), [results]);

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.replace('/');
    }
  }, [isUserLoading, user, router]);

  const totalCoding = 30;
  const totalAptitude = 30;

  if (isUserLoading || isResultsLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <Card className="w-full max-w-2xl shadow-2xl text-center">
          <CardHeader>
            <Skeleton className="h-10 w-10 rounded-full mx-auto" />
            <Skeleton className="h-8 w-64 mx-auto mt-4" />
            <Skeleton className="h-6 w-80 mx-auto mt-2" />
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <Skeleton className="h-32 w-full rounded-lg" />
              <Skeleton className="h-32 w-full rounded-lg" />
            </div>
            <Skeleton className="h-40 w-full rounded-lg" />
          </CardContent>
          <CardFooter className="flex-col gap-2 pt-6">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-10 w-32 mt-4" />
          </CardFooter>
        </Card>
      </main>
    );
  }

  if (!latestResult) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-4">
        <p>No results found. Please complete the test first.</p>
        <Button onClick={() => router.push('/')} className="mt-4">
            Back to Home
        </Button>
      </div>
    );
  }
  
  const { studentName, codingScore, aptitudeScore } = latestResult;

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
            Thank you, {studentName || 'student'}, for taking the test. Here are your results.
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
