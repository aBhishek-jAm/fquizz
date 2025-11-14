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
  {
    id: 2,
    category: 'coding',
    language: 'Python',
    question: 'What is the output of the following?\n\nmy_list = [1, 2, 3]\nprint(my_list * 2)',
    options: ["[2, 4, 6]", "[1, 2, 3, 1, 2, 3]", "[[1, 2, 3], [1, 2, 3]]", "Error"],
    answer: "[1, 2, 3, 1, 2, 3]"
  },
  {
    id: 3,
    category: 'coding',
    language: 'Java',
    question: 'Which of the following is not a primitive data type in Java?',
    options: ["int", "String", "char", "float"],
    answer: "String"
  },
  // Add 27 more coding questions to make it 30
  ...Array.from({ length: 27 }, (_, i) => ({
    id: 4 + i,
    category: 'coding' as const,
    language: (['C', 'Python', 'Java'] as const)[i % 3],
    question: `Sample ${(['C', 'Python', 'Java'] as const)[i % 3]} question ${i + 1}?`,
    options: [`Option A${i}`, `Option B${i}`, `Option C${i}`, `Option D${i}`],
    answer: `Option A${i}`
  }))
];

export const aptitudeQuestions: Question[] = [
  {
    id: 31,
    category: 'aptitude',
    question: 'If a car travels at 60 km/h, how far will it travel in 45 minutes?',
    options: ["30 km", "45 km", "50 km", "60 km"],
    answer: "45 km"
  },
  {
    id: 32,
    category: 'aptitude',
    question: 'Which number should come next in the series: 1, 4, 9, 16, __?',
    options: ["20", "25", "30", "36"],
    answer: "25"
  },
  {
    id: 33,
    category: 'aptitude',
    question: 'A man buys an article for Rs. 27.50 and sells it for Rs. 28.60. Find his gain percent.',
    options: ["2%", "3%", "4%", "5%"],
    answer: "4%"
  },
  // Add 27 more aptitude questions to make it 30
  ...Array.from({ length: 27 }, (_, i) => ({
    id: 34 + i,
    category: 'aptitude' as const,
    question: `Sample Aptitude/Logical question ${i + 1}?`,
    options: [`Aptitude A${i}`, `Aptitude B${i}`, `Aptitude C${i}`, `Aptitude D${i}`],
    answer: `Aptitude A${i}`
  }))
];

export const allQuestions = [...codingQuestions, ...aptitudeQuestions];
