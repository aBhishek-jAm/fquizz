"use client";

import { TestProvider } from "@/context/TestContext";
import { Toaster } from "@/components/ui/toaster";

export default function TestWrapper({ children }: { children: React.ReactNode }) {
  return (
    <TestProvider>
      {children}
      <Toaster />
    </TestProvider>
  );
}
