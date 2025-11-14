# **App Name**: ExamFlow

## Core Features:

- Student Details Collection: Collect student details such as Full Name, Semester, USN, Mobile Number, Email, Department, and College Name using a mandatory form.
- Instructions Display: Display test instructions including duration, auto-submit rules, no tab switching policy, and the test structure.
- MCQ Test Page: Load and display coding MCQs (C, Python, Java) and logical/aptitude questions from JSON files.
- Automated Timer: Implement a visible timer with auto-submit functionality after 60 minutes.
- Tab Switch Detection: Detect tab switching using the browser visibility API, issue warnings, and auto-submit after two warnings.
- Score Calculation: Calculate scores for both coding and aptitude sections separately.
- Data Storage: Store student details, coding score, aptitude score, timestamp, browser info, and warning count in a Firestore database.

## Style Guidelines:

- Primary color: A saturated blue (#29ABE2) for calmness and focus during the test.
- Background color: A very light blue (#E0F7FA), a muted variant of the primary.
- Accent color: A vivid, contrasting orange (#FFB300) to draw attention to important elements.
- Body and headline font: 'Inter', a grotesque-style sans-serif for a modern, neutral look, suitable for both headlines and body text.
- Use clear, concise icons for instructions and warnings.
- Multi-page form layout similar to Google Forms for ease of use.
- Subtle animations for timer updates and page transitions.