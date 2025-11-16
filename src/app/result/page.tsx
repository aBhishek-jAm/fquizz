"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { CheckCircle, Award } from 'lucide-react';

export default function ResultPage() {
  const router = useRouter();
  const { user, isUserLoading } = useUser();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.replace('/');
    }
  }, [isUserLoading, user, router]);

  if (isUserLoading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <Card className="w-full max-w-2xl shadow-2xl text-center">
          <CardHeader>
            <Skeleton className="h-10 w-10 rounded-full mx-auto" />
            <Skeleton className="h-8 w-64 mx-auto mt-4" />
            <Skeleton className="h-6 w-80 mx-auto mt-2" />
          </CardHeader>
          <CardContent className="space-y-6">
            <Skeleton className="h-20 w-full rounded-lg" />
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

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-2xl shadow-2xl text-center">
        <CardHeader>
          <div className="mx-auto bg-primary text-primary-foreground rounded-full p-4 w-fit mb-4">
            <Award className="h-10 w-10" />
          </div>
          <CardTitle className="font-headline text-3xl">Test Completed!</CardTitle>
          <CardDescription className="text-lg">
            Thank you for taking the test.
          </CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col items-center gap-4">
                <CheckCircle className="h-16 w-16 text-green-600" />
                <p className="text-muted-foreground text-center">Your results have been successfully submitted. <br /> You can now safely close this window.</p>
            </div>
        </CardContent>
        <CardFooter className="flex-col gap-2 pt-6">
          <Button onClick={() => router.push('/')} className="mt-4">
            Back to Home
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
