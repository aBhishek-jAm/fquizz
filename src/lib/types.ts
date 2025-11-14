export interface Question {
  id: number;
  category: 'coding' | 'aptitude';
  language?: 'C' | 'Python' | 'Java';
  question: string;
  options: string[];
  answer: string;
}

export interface StudentDetails {
  fullName: string;
  semester: string;
  usn: string;
  mobile: string;
  email: string;
  department: string;
  collegeName: string;
}

export interface TestResult {
  id: string;
  studentId: string;
  studentName: string;
  codingScore: number;
  aptitudeScore: number;
  timestamp: any; // Firestore ServerTimestamp
  warningsCount: number;
  browserInfo: string;
}
