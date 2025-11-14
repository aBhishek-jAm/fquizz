"use client";

import { Clock } from "lucide-react";
import { useEffect, useState } from "react";

interface TimerProps {
  timeLeft: number;
}

export default function Timer({ timeLeft }: TimerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  if (!isClient) {
    return (
      <div className="flex items-center gap-2 font-mono text-lg font-semibold bg-accent text-accent-foreground py-2 px-4 rounded-lg shadow-md">
        <Clock className="h-5 w-5" />
        <span>--:--</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 font-mono text-lg font-semibold bg-accent text-accent-foreground py-2 px-4 rounded-lg shadow-md">
      <Clock className="h-5 w-5 animate-pulse" />
      <span>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
}
