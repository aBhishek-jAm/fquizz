import type { Question } from './types';

export const codingQuestions: Question[] = [
  {
    id: 1,
    category: 'coding',
    language: 'C',
    question: '#include<stdio.h>\nint main(){\n    int x = 5;\n    printf("%d", x++ * ++x);\n    return 0;\n}',
    options: ["25", "30", "35", "Undefined Behavior"],
    answer: "Undefined Behavior"
  },
  // Add 27 more coding questions to make it 30

];

export const aptitudeQuestions: Question[] = [
  {
    id: 31,
    category: 'aptitude',
    question: 'If a car travels at 60 km/h, how far will it travel in 45 minutes?',
    options: ["30 km", "45 km", "50 km", "60 km"],
    answer: "45 km"
  }
];

export const allQuestions = [...codingQuestions, ...aptitudeQuestions];
