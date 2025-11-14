"use client";

import { useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TestContext } from '@/context/TestContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpenCheck } from 'lucide-react';
import type { StudentDetails } from '@/lib/types';
import { useAuth } from '@/firebase';
import { signInAnonymously } from 'firebase/auth';

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Full name is required.' }),
  semester: z.string().min(1, { message: 'Semester is required.' }),
  usn: z.string().min(5, { message: 'A valid USN is required.' }),
  mobile: z.string().regex(/^\d{10}$/, { message: 'Must be a valid 10-digit number.' }),
  email: z.string().email({ message: 'A valid email is required.' }),
  department: z.string().min(2, { message: 'Department is required.' }),
  collegeName: z.string().min(3, { message: 'College name is required.' }),
});

export default function StudentDetailsPage() {
  const router = useRouter();
  const context = useContext(TestContext);
  const auth = useAuth();

  useEffect(() => {
    // Sign in the user anonymously when the page loads
    signInAnonymously(auth).catch((error) => {
      console.error("Anonymous sign-in failed:", error);
    });
  }, [auth]);

  if (!context) {
    throw new Error('TestContext not found');
  }
  const { saveStudentDetails } = context;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      semester: '',
      usn: '',
      mobile: '',
      email: '',
      department: '',
      collegeName: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    saveStudentDetails(values as StudentDetails);
    router.push('/instructions');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
            <BookOpenCheck className="h-8 w-8" />
          </div>
          <CardTitle className="font-headline text-3xl">ExamFlow - Student Details</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your full name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="usn"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>USN</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your USN" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="semester"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Semester</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., 5" type="text" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input placeholder="10-digit mobile number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., Computer Science" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="collegeName"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>College Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your college name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full text-lg py-6" size="lg">
                Proceed to Instructions
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
