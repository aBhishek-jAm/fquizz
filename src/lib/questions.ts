import type { Question } from './types';

export const codingQuestions: Question[] = [
  {
    id: 1,
    category: 'coding',
    language: 'C',
    question: '#include<stdio.h>\nint main(){\n    int x = 5;\n    printf("%d", x++ * ++x);\n    return 0;\n}\n whats the output',
    options: ["25", "30", "35", "Undefined Behavior"],
    answer: "Undefined Behavior"
  },
  // 29 more coding questions
  {
    "id": 2,
    "category": "coding",
    "language": "Python",
    "question": "What is the output of: `print([] is [])`?",
    "options": ["True", "False", "Depends on Python version", "Error"],
    "answer": "False"
  },
  {
    "id": 3,
    "category": "coding",
    "language": "Python",
    "question": "What is the output? `a = [1,2,3]; b = a; a += [4]; print(b)`",
    "options": ["[1,2,3]", "[1,2,3,4]", "Error", "None"],
    "answer": "[1,2,3,4]"
  },
  {
    "id": 4,
    "category": "coding",
    "language": "Python",
    "question": "What does `sum([[1,2],[3,4]], [])` return?",
    "options": ["[1,2,3,4]", "[[1,2],[3,4]]", "TypeError", "[1,2]"],
    "answer": "[1,2,3,4]"
  },
  {
    "id": 5,
    "category": "coding",
    "language": "Python",
    "question": "What is the output of: `print({1,2,3} == {3,2,1})`?",
    "options": ["True", "False", "Depends", "Error"],
    "answer": "True"
  },
  {
    "id": 6,
    "category": "coding",
    "language": "Python",
    "question": "What is the output? `x = (i*i for i in range(3)); print(next(x), next(x))`",
    "options": ["0 1", "0 4", "1 4", "Error"],
    "answer": "0 1"
  },
  {
    "id": 7,
    "category": "coding",
    "language": "Java",
    "question": "What is the result of: `System.out.println(100/0);`?",
    "options": ["Infinity", "Runtime Error", "0", "NaN"],
    "answer": "Runtime Error"
  },
  {
    "id": 8,
    "category": "coding",
    "language": "Java",
    "question": "Which one is true about Java interfaces?",
    "options": [
      "Interfaces can have constructors",
      "Interfaces can contain static methods",
      "Interfaces can be instantiated directly",
      "Interfaces cannot have default methods"
    ],
    "answer": "Interfaces can contain static methods"
  },
  {
    "id": 9,
    "category": "coding",
    "language": "Java",
    "question": "What is printed? `System.out.println('A' + 1);`",
    "options": ["A1", "66", "B", "Error"],
    "answer": "66"
  },
  {
    "id": 10,
    "category": "coding",
    "language": "Java",
    "question": "Which of the following is true about `StringBuilder`?",
    "options": ["It is immutable", "It is thread-safe", "It is mutable", "It stores values in constant pool"],
    "answer": "It is mutable"
  },
  {
    "id": 11,
    "category": "coding",
    "language": "Java",
    "question": "What happens when a subclass does not implement all abstract methods?",
    "options": [
      "Compile-time error",
      "Runtime error",
      "It becomes an abstract class",
      "Nothing will happen"
    ],
    "answer": "It becomes an abstract class"
  },
  {
    "id": 12,
    "category": "coding",
    "language": "C",
    "question": "What is the output of: `printf(\"%d\", 'A' + 1);`?",
    "options": ["66", "A1", "Error", "B"],
    "answer": "66"
  },
  {
    "id": 13,
    "category": "coding",
    "language": "C",
    "question": "What will happen? `int a=5; int b=0; printf(\"%d\", a/b);`",
    "options": ["0", "Infinity", "Undefined behaviour", "Error"],
    "answer": "Undefined behaviour"
  },
  {
    "id": 14,
    "category": "coding",
    "language": "C",
    "question": "What is the output of: `printf(\"%d\", sizeof(5.0));`",
    "options": ["4", "8", "2", "Depends on compiler"],
    "answer": "8"
  },
  {
    "id": 15,
    "category": "coding",
    "language": "C",
    "question": "What does `extern` do?",
    "options": [
      "Allocates memory globally",
      "Declares a variable without defining it",
      "Defines a constant",
      "Declares a pointer variable"
    ],
    "answer": "Declares a variable without defining it"
  },
  {
    "id": 16,
    "category": "coding",
    "language": "Python",
    "question": "What is the output of: `print((1,2) < (1,2,3))`?",
    "options": ["True", "False", "Error", "Depends"],
    "answer": "True"
  },
  {
    "id": 17,
    "category": "coding",
    "language": "Python",
    "question": "What will `list('abc')` return?",
    "options": ["['abc']", "['a','b','c']", "['ab','c']", "Error"],
    "answer": "['a','b','c']"
  },
  {
    "id": 18,
    "category": "coding",
    "language": "Python",
    "question": "What is the output? `print(type(lambda x: x))`",
    "options": ["function", "lambda", "<class 'function'>", "Error"],
    "answer": "<class 'function'>"
  },
  {
    "id": 19,
    "category": "coding",
    "language": "Java",
    "question": "Which of the following is true about Java enums?",
    "options": [
      "Enums cannot have methods",
      "Enums extend the Enum class",
      "Enums are primitive types",
      "Enums cannot have constructors"
    ],
    "answer": "Enums extend the Enum class"
  },
  {
    "id": 20,
    "category": "coding",
    "language": "Java",
    "question": "What is printed? `System.out.println(0.0/0.0);`",
    "options": ["0", "Infinity", "NaN", "Error"],
    "answer": "NaN"
  },
  {
    "id": 21,
    "category": "coding",
    "language": "Java",
    "question": "Which exception is thrown when accessing an array index out of range?",
    "options": [
      "NullPointerException",
      "IndexOutOfBoundsException",
      "IllegalStateException",
      "ArithmeticException"
    ],
    "answer": "IndexOutOfBoundsException"
  },
  {
    "id": 22,
    "category": "coding",
    "language": "C",
    "question": "What is the output? `int a = 5; int *p = &a; printf(\"%p\", p);`",
    "options": ["Address of variable", "5", "Error", "0"],
    "answer": "Address of variable"
  },
  {
    "id": 23,
    "category": "coding",
    "language": "C",
    "question": "What is wrong with: `int arr[0];`?",
    "options": ["Nothing", "Zero-length arrays are invalid", "Compiler crash", "Runtime error"],
    "answer": "Zero-length arrays are invalid"
  },
  {
    "id": 24,
    "category": "coding",
    "language": "C",
    "question": "What is printed? `printf(\"%d\", sizeof(\"hello\"));`",
    "options": ["5", "6", "4", "Depends"],
    "answer": "6"
  },
  {
    "id": 25,
    "category": "coding",
    "language": "Python",
    "question": "What is the output? `print({True: 'A', 1: 'B'}[True])`",
    "options": ["A", "B", "Error", "None"],
    "answer": "B"
  },
  {
    "id": 26,
    "category": "coding",
    "language": "Python",
    "question": "Which of the following is NOT a valid Python datatype?",
    "options": ["frozenset", "bytearray", "tuple", "linkedlist"],
    "answer": "linkedlist"
  },
  {
    "id": 27,
    "category": "coding",
    "language": "Java",
    "question": "What is the output? `System.out.println(true && false || true);`",
    "options": ["true", "false", "Error", "Depends"],
    "answer": "true"
  },
  {
    "id": 28,
    "category": "coding",
    "language": "Java",
    "question": "Which will cause a compile error?",
    "options": [
      "int x = 10_000;",
      "double d = 1_2_3.4;",
      "int y = _50;",
      "int z = 0b1010;"
    ],
    "answer": "int y = _50;"
  },
  {
    "id": 29,
    "category": "coding",
    "language": "C",
    "question": "What is printed? `printf(\"%d\", sizeof(int*));`",
    "options": ["2", "4", "8", "Depends on system"],
    "answer": "Depends on system"
  },
  { id: 30, category: 'coding', language: 'Java', question: 'Which access modifier provides the widest accessibility?', options: ['public', 'private', 'protected', 'default'], answer: 'public' }
];

export const aptitudeQuestions: Question[] = [
  {
    id: 31,
    category: 'aptitude',
    question: 'If a car travels at 60 km/h, how far will it travel in 45 minutes?',
    options: ["30 km", "45 km", "50 km", "60 km"],
    answer: "45 km"
  },
  // 29 more aptitude questions
  {
    "id": 32,
    "category": "aptitude",
    "question": "What is the next number in the series: 3, 8, 15, 24, 35, ?",
    "options": ["48", "49", "47", "50"],
    "answer": "48"
  },
  {
    "id": 33,
    "category": "aptitude",
    "question": "A shopkeeper marks an item 40% above cost price and offers a discount of 10%. What is the profit percentage?",
    "options": ["26%", "30%", "24%", "28%"],
    "answer": "26%"
  },
  {
    "id": 34,
    "category": "aptitude",
    "question": "If 4 workers complete a task in 18 days, how many days will 6 workers take (assuming equal efficiency)?",
    "options": ["12 days", "10 days", "15 days", "8 days"],
    "answer": "12 days"
  },
  {
    "id": 35,
    "category": "aptitude",
    "question": "The average of 6 numbers is 20. One number is replaced by 50, and the new average becomes 25. What was the replaced number?",
    "options": ["5", "10", "15", "20"],
    "answer": "5"
  },
  {
    "id": 36,
    "category": "aptitude",
    "question": "Which word does NOT belong to the group? (Iron, Copper, Plastics, Aluminium)",
    "options": ["Iron", "Copper", "Plastics", "Aluminium"],
    "answer": "Plastics"
  },
  {
    "id": 37,
    "category": "aptitude",
    "question": "A train passes a 500 m long platform in 25 seconds. If its speed is 72 km/h, what is the length of the train?",
    "options": ["500 m", "300 m", "200 m", "250 m"],
    "answer": "300 m"
  },
  {
    "id": 38,
    "category": "aptitude",
    "question": "Find the missing number: 2, 6, 12, 20, 30, ?",
    "options": ["42", "40", "45", "48"],
    "answer": "42"
  },
  {
    "id": 39,
    "category": "aptitude",
    "question": "If a number is increased by 25% and then decreased by 20%, the net change is:",
    "options": ["+0%", "+2%", "+4%", "−5%"],
    "answer": "+0%"
  },
  {
    "id": 40,
    "category": "aptitude",
    "question": "If 'BALL' is coded as '2355', what is the code for 'CALL'?",
    "options": ["3355", "2355", "1455", "2455"],
    "answer": "4355"
  },
  {
    "id": 41,
    "category": "aptitude",
    "question": "At what time between 4 and 5 o'clock do the hands of a clock form a right angle?",
    "options": ["4:38 2/11", "4:21 9/11", "4:32 8/11", "4:15 5/11"],
    "answer": "4:38 2/11"
  },
  {
    "id": 42,
    "category": "aptitude",
    "question": "A man walks at 5 km/h for 2 hours and then at 4 km/h for 3 hours. What is his average speed?",
    "options": ["4.4 km/h", "4.6 km/h", "4.8 km/h", "5 km/h"],
    "answer": "4.6 km/h"
  },
  {
    "id": 43,
    "category": "aptitude",
    "question": "The sum of the ages of A, B, and C is 75. Five years ago, their ages were in the ratio 3:4:5. What is C's present age?",
    "options": ["30", "25", "35", "40"],
    "answer": "30"
  },
  {
    "id": 44,
    "category": "aptitude",
    "question": "Series: 11, 14, 12, 15, 13, 16, ?",
    "options": ["14", "16", "17", "18"],
    "answer": "14"
  },
  {
    "id": 45,
    "category": "aptitude",
    "question": "BOOK : PAPER :: BRICK : ?",
    "options": ["CLAY", "STONE", "HOUSE", "WALL"],
    "answer": "CLAY"
  },
  {
    "id": 46,
    "category": "aptitude",
    "question": "A rectangle has a diagonal of 10 cm and one side of 6 cm. What is the other side?",
    "options": ["8 cm", "6 cm", "4 cm", "5 cm"],
    "answer": "8 cm"
  },
  {
    "id": 47,
    "category": "aptitude",
    "question": "What is 15% of 240?",
    "options": ["36", "34", "32", "30"],
    "answer": "36"
  },
  {
    "id": 48,
    "category": "aptitude",
    "question": "How many diagonals does a decagon (10-sided polygon) have?",
    "options": ["35", "40", "45", "50"],
    "answer": "35"
  },
  {
    "id": 49,
    "category": "aptitude",
    "question": "If you rearrange the letters 'NITRA', you get the name of a:",
    "options": ["Metal", "River", "Continent", "Country"],
    "answer": "Country"
  },
  {
    "id": 50,
    "category": "aptitude",
    "question": "What is the cube root of 3375?",
    "options": ["15", "12", "18", "20"],
    "answer": "15"
  },
  {
    "id": 51,
    "category": "aptitude",
    "question": "A farmer sold a cow for $840 at a loss of 16%. What was the cost price?",
    "options": ["$1000", "$960", "$1050", "$750"],
    "answer": "$1000"
  },
  {
    "id": 52,
    "category": "aptitude",
    "question": "Which number is the odd one out: 11, 23, 36, 47, 59?",
    "options": ["36", "23", "47", "59"],
    "answer": "36"
  },
  {
    "id": 53,
    "category": "aptitude",
    "question": "A is the father of B. B is the father of C. C is the brother of D. How is A related to D?",
    "options": ["Grandfather", "Father", "Uncle", "Cousin"],
    "answer": "Grandfather"
  },
  {
    "id": 54,
    "category": "aptitude",
    "question": "What day of the week was 1st January 1990?",
    "options": ["Monday", "Sunday", "Friday", "Wednesday"],
    "answer": "Monday"
  },
  {
    "id": 55,
    "category": "aptitude",
    "question": "A quantity is increased by 20% and then decreased by 20%. What is the net change?",
    "options": ["4% decrease", "No change", "4% increase", "8% decrease"],
    "answer": "4% decrease"
  },
  {
    "id": 56,
    "category": "aptitude",
    "question": "Choose the word which is different: (Lion, Tiger, Leopard, Bear)",
    "options": ["Lion", "Tiger", "Leopard", "Bear"],
    "answer": "Bear"
  },
  {
    "id": 57,
    "category": "aptitude",
    "question": "What is the sum of the first 12 prime numbers?",
    "options": ["197", "199", "198", "200"],
    "answer": "197"
  },
  { id: 58, category: 'aptitude', question: 'A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is :', options: ['8/15', '7/15', '1/4', '1/10'], answer: '8/15' },
  { id: 59, category: 'aptitude', question: 'If 20 men can build a wall 56 meters long in 6 days, what length of a similar wall can be built by 35 men in 3 days?', options: ['49 meters', '52 meters', '56 meters', '47 meters'], answer: '49 meters' },
  { id: 60, category: 'aptitude', question: 'The angle of elevation of a ladder leaning against a wall is 60° and the foot of the ladder is 4.6 m away from the wall. What is the length of the ladder?', options: ['9.2 m', '8.4 m', '10.2 m', '7.8 m'], answer: '9.2 m' }
];

export const allQuestions = [...codingQuestions, ...aptitudeQuestions];
