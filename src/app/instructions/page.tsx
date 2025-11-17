"use client";

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TestContext } from '@/context/TestContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, BookCopy, AlertTriangle, FileWarning, CheckCircle } from 'lucide-react';

export default function InstructionsPage() {
  const router = useRouter();
  const context = useContext(TestContext);
  
  if (!context) {
    throw new Error('TestContext not found');
  }

  const { startTest, studentDetails } = context;
  
  useEffect(() => {
    if (!studentDetails) {
      router.replace('/');
    }
  }, [studentDetails, router]);

  const instructions = [
    { icon: Clock, text: "Total duration: 60 minutes. The test will auto-submit exactly after 60 minutes." },
    { icon: AlertTriangle, text: "Switching tabs is not allowed. After 2 warnings, the test will be auto-submitted." },
    { icon: FileWarning, text: "Do not refresh the page. Your progress may be lost." },
    { icon: BookCopy, text: "The test contains 60 MCQs: 30 coding questions followed by 30 logical reasoning & aptitude questions." },
    { icon: Clock, text: "Wait till you get the result page before closing the test tab" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-3xl shadow-2xl">
        <CardHeader>
          <CardTitle className="font-headline text-3xl text-center">Test Instructions</CardTitle>
          <CardDescription className="text-center">
            Please read the following instructions carefully before you begin.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-6">
            {instructions.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <item.icon className="h-8 w-8 text-primary mt-1 shrink-0" />
                <span className="text-lg text-foreground/80">{item.text}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex-col gap-4 pt-6">
            <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <p className="text-sm text-muted-foreground">All the best for your test!</p>
            </div>
          <Button onClick={startTest} size="lg" className="w-full text-xl py-7 font-bold">
            Start Test
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
