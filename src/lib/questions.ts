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
  // 29 more coding questions
  { id: 2, category: 'coding', language: 'Python', question: 'What is the output of: `print(2 ** 3 ** 2)`', options: ['64', '512', 'Error', 'None of the above'], answer: '512' },
  { id: 3, category: 'coding', language: 'Java', question: 'Which of the following is not a Java keyword?', options: ['static', 'Boolean', 'void', 'private'], answer: 'Boolean' },
  { id: 4, category: 'coding', language: 'C', question: 'What is the size of `int` in C?', options: ['2 bytes', '4 bytes', '8 bytes', 'Depends on the system'], answer: 'Depends on the system' },
  { id: 5, category: 'coding', language: 'Python', question: 'What does `[::-1]` do in Python?', options: ['Reverses a list', 'Slices a list from the beginning', 'Slices a list to the end', 'Causes an error'], answer: 'Reverses a list' },
  { id: 6, category: 'coding', language: 'Java', question: 'What is the default value of a boolean variable in Java?', options: ['true', 'false', 'null', '0'], answer: 'false' },
  { id: 7, category: 'coding', language: 'C', question: 'Which operator is used to get the value at an address stored in a pointer variable?', options: ['*', '&', '&&', '->'], answer: '*' },
  { id: 8, category: 'coding', language: 'Python', question: 'Is Python case-sensitive when dealing with identifiers?', options: ['Yes', 'No', 'Depends on the context', 'Only for variable names'], answer: 'Yes' },
  { id: 9, category: 'coding', language: 'Java', question: 'Which class is the superclass of all other classes in Java?', options: ['Object', 'System', 'String', 'Main'], answer: 'Object' },
  { id: 10, category: 'coding', language: 'C', question: 'What is `malloc()` used for?', options: ['To allocate memory', 'To free memory', 'To reallocate memory', 'To call a function'], answer: 'To allocate memory' },
  { id: 11, category: 'coding', language: 'Python', question: 'Which keyword is used for functions in Python?', options: ['function', 'def', 'fun', 'define'], answer: 'def' },
  { id: 12, category: 'coding', language: 'Java', question: 'Which of these is a valid constructor for a class named `MyClass`?', options: ['MyClass()', 'void MyClass()', 'MyClass(void)', 'int MyClass()'], answer: 'MyClass()' },
  { id: 13, category: 'coding', language: 'C', question: 'What is the purpose of `\0` in a string?', options: ['It represents a null character', 'It is a space', 'It is a newline character', 'It is a tab'], answer: 'It represents a null character' },
  { id: 14, category: 'coding', language: 'Python', question: 'How do you create a dictionary in Python?', options: ['{}', '[]', '()', '<>'], answer: '{}' },
  { id: 15, category: 'coding', language: 'Java', question: 'What is method overloading?', options: ['Methods with same name but different parameters', 'Methods with same name and same parameters', 'Methods with different names', 'Methods in different classes'], answer: 'Methods with same name but different parameters' },
  { id: 16, category: 'coding', language: 'C', question: 'What does `typedef` do?', options: ['Creates an alias for a data type', 'Defines a new variable', 'Defines a macro', 'Defines a structure'], answer: 'Creates an alias for a data type' },
  { id: 17, category: 'coding', language: 'Python', question: 'What will be the output of `len("hello")`?', options: ['5', '6', '4', 'Error'], answer: '5' },
  { id: 18, category: 'coding', language: 'Java', question: 'What does the `final` keyword mean?', options: ['The value cannot be changed', 'The method cannot be overridden', 'The class cannot be subclassed', 'All of the above'], answer: 'All of the above' },
  { id: 19, category: 'coding', language: 'C', question: 'Which header file is required for using `printf()`?', options: ['stdio.h', 'stdlib.h', 'string.h', 'math.h'], answer: 'stdio.h' },
  { id: 20, category: 'coding', language: 'Python', question: 'Which of the following is immutable?', options: ['list', 'dict', 'set', 'tuple'], answer: 'tuple' },
  { id: 21, category: 'coding', language: 'Java', question: 'Which collection class allows unique elements only?', options: ['List', 'Set', 'Map', 'Vector'], answer: 'Set' },
  { id: 22, category: 'coding', language: 'C', question: 'A pointer is a...', options: ['Variable that stores the address of another variable', 'Variable that stores an integer', 'Variable that stores a character', 'A keyword'], answer: 'Variable that stores the address of another variable' },
  { id: 23, category: 'coding', language: 'Python', question: 'Which statement is used to raise an exception?', options: ['try', 'except', 'raise', 'finally'], answer: 'raise' },
  { id: 24, category: 'coding', language: 'Java', question: 'The `instanceof` operator checks...', options: ['If an object is an instance of a specific class', 'If two objects are the same', 'If a class is abstract', 'If a method is static'], answer: 'If an object is an instance of a specific class' },
  { id: 25, category: 'coding', language: 'C', question: 'What is the output of `sizeof(char)`?', options: ['1', '2', '4', 'Depends on the system'], answer: '1' },
  { id: 26, category: 'coding', language: 'Python', question: 'How do you comment a single line in Python?', options: ['#', '//', '/*', '<!--'], answer: '#' },
  { id: 27, category: 'coding', language: 'Java', question: 'What is garbage collection in Java?', options: ['Automatic memory management', 'Manual memory management', 'A way to collect garbage values', 'A type of exception'], answer: 'Automatic memory management' },
  { id: 28, category: 'coding', language: 'C', question: 'Which is not a valid C variable name?', options: ['int number;', 'float rate;', 'int $main;', 'int main_2;'], answer: 'int $main;' },
  { id: 29, category: 'coding', language: 'Python', question: 'What is the output of `3 * (1 + 2)`?', options: ['9', '7', '6', 'Error'], answer: '9' },
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
  { id: 32, category: 'aptitude', question: 'What is the next number in the series: 2, 5, 10, 17, 26, ?', options: ['37', '35', '36', '38'], answer: '37' },
  { id: 33, category: 'aptitude', question: 'A man buys a toy for $25 and sells it for $30. What is his profit percentage?', options: ['20%', '25%', '15%', '10%'], answer: '20%' },
  { id: 34, category: 'aptitude', question: 'If 3 apples cost $5, how many apples can you buy for $25?', options: ['15', '12', '20', '10'], answer: '15' },
  { id: 35, category: 'aptitude', question: 'The average of 5 numbers is 10. If one number is excluded, the average becomes 11. What is the excluded number?', options: ['6', '5', '7', '8'], answer: '6' },
  { id: 36, category: 'aptitude', question: 'Which word does not belong to the group? (Apple, Banana, Rose, Orange)', options: ['Apple', 'Banana', 'Rose', 'Orange'], answer: 'Rose' },
  { id: 37, category: 'aptitude', question: 'A train 100m long is running at a speed of 30 km/h. Find the time taken by it to pass a man standing near the railway line.', options: ['12 seconds', '15 seconds', '10 seconds', '18 seconds'], answer: '12 seconds' },
  { id: 38, category: 'aptitude', question: 'Find the missing number: 8, 27, 64, ?, 216', options: ['125', '100', '150', '135'], answer: '125' },
  { id: 39, category: 'aptitude', question: 'What is 20% of 200?', options: ['40', '20', '50', '30'], answer: '40' },
  { id: 40, category: 'aptitude', question: 'If `CAT` is coded as `3120`, what is the code for `DOG`?', options: ['4157', '4158', '4156', '4159'], answer: '4157' },
  { id: 41, category: 'aptitude', question: 'A clock shows 3:15. What is the angle between the hour and minute hands?', options: ['7.5 degrees', '15 degrees', '0 degrees', '10 degrees'], answer: '7.5 degrees' },
  { id: 42, category: 'aptitude', question: 'A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?', options: ['7.2', '8', '6', '7.5'], answer: '7.2' },
  { id: 43, category: 'aptitude', question: 'The sum of the ages of 5 children born at intervals of 3 years each is 50 years. What is the age of the youngest child?', options: ['4 years', '8 years', '10 years', 'None of these'], answer: '4 years' },
  { id: 44, category: 'aptitude', question: 'Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?', options: ['7', '10', '12', '13'], answer: '10' },
  { id: 45, category: 'aptitude', question: 'CUP : LIP :: BIRD : ?', options: ['BUSH', 'GRASS', 'FOREST', 'BEAK'], answer: 'BEAK' },
  { id: 46, category: 'aptitude', question: 'If a rectangle has a length of 8 cm and a width of 5 cm, what is its perimeter?', options: ['26 cm', '13 cm', '40 cm', '21 cm'], answer: '26 cm' },
  { id: 47, category: 'aptitude', question: 'What is the value of pi (π) up to two decimal places?', options: ['3.14', '3.12', '3.15', '3.16'], answer: '3.14' },
  { id: 48, category: 'aptitude', question: 'How many sides does a hexagon have?', options: ['6', '7', '8', '5'], answer: '6' },
  { id: 49, category: 'aptitude', question: 'If you rearrange the letters "CIFAIPC" you would have the name of a(n):', options: ['Ocean', 'Country', 'City', 'Animal'], answer: 'Ocean' },
  { id: 50, category: 'aptitude', question: 'What is the square root of 144?', options: ['12', '14', '16', '10'], answer: '12' },
  { id: 51, category: 'aptitude', question: 'A farmer has 17 sheep, and all but 9 die. How many are left?', options: ['9', '8', '17', '0'], answer: '9' },
  { id: 52, category: 'aptitude', question: 'Which number is the odd one out: 9, 25, 49, 81, 121, 168', options: ['168', '121', '81', '49'], answer: '168' },
  { id: 53, category: 'aptitude', question: 'A is B`s sister. C is B`s mother. D is C`s father. E is D`s mother. Then, how is A related to D?', options: ['Granddaughter', 'Grandfather', 'Daughter', 'Grandmother'], answer: 'Granddaughter' },
  { id: 54, category: 'aptitude', question: 'What day of the week was it on 1st January 2001?', options: ['Monday', 'Tuesday', 'Wednesday', 'Sunday'], answer: 'Monday' },
  { id: 55, category: 'aptitude', question: 'The price of an item is decreased by 25%. What percent increase must be done in the new price to get the original price?', options: ['33.33%', '25%', '30%', '40%'], answer: '33.33%' },
  { id: 56, category: 'aptitude', question: 'Choose the word which is different from the rest: (A) Kiwi (B) Eagle (C) Emu (D) Ostrich', options: ['Eagle', 'Kiwi', 'Emu', 'Ostrich'], answer: 'Eagle' },
  { id: 57, category: 'aptitude', question: 'What is the sum of the first 10 prime numbers?', options: ['129', '130', '128', '127'], answer: '129' },
  { id: 58, category: 'aptitude', question: 'A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is :', options: ['8/15', '7/15', '1/4', '1/10'], answer: '8/15' },
  { id: 59, category: 'aptitude', question: 'If 20 men can build a wall 56 meters long in 6 days, what length of a similar wall can be built by 35 men in 3 days?', options: ['49 meters', '52 meters', '56 meters', '47 meters'], answer: '49 meters' },
  { id: 60, category: 'aptitude', question: 'The angle of elevation of a ladder leaning against a wall is 60° and the foot of the ladder is 4.6 m away from the wall. What is the length of the ladder?', options: ['9.2 m', '8.4 m', '10.2 m', '7.8 m'], answer: '9.2 m' }
];

export const allQuestions = [...codingQuestions, ...aptitudeQuestions];
