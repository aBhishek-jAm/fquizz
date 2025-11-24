import type { Question } from './types';

export const codingQuestions: Question[] = [
  {
    id: 1,
    category: 'coding',
    language: 'C',
    question: `Consider the expression using volatile and sequence of side-effects:
#include <stdio.h>
int main(){
    volatile int x = 1;
    int a = (x++ , ++x , x += x , x-- , x);
    printf("%d", a ^ (a << (a & 3)));
    return 0;
}`,
    options: [
      "Undefined Behavior due to unspecified evaluation order",
      "Deterministic bitwise integer printed",
      "Depends on compiler optimizations and UB manifests",
      "Always prints 0"
    ],
    answer: "Undefined Behavior due to unspecified evaluation order"
  },
  {
    id: 2,
    category: 'coding',
    language: 'C',
    question: `Given pointer arithmetic and strict aliasing rules:
struct S { char c; int x; };
int main(){
  struct S s = {'A', 0x01020304};
  unsigned char *p = (unsigned char*)&s.x;
  printf("%02x", p[0]);
}
What is guaranteed to print by the C standard?`,
    options: ["04", "01", "Implementation-defined endianness", "Undefined behavior due to aliasing"],
    answer: "Implementation-defined endianness"
  },
  {
    id: 3,
    category: 'coding',
    language: 'C',
    question: `What does the C standard guarantee about evaluating i++ + ++i when i is an int?`,
    options: ["Well-defined determined result", "Undefined behavior", "Sequence-point defined to left-to-right", "Implementation defined but not undefined"],
    answer: "Undefined behavior"
  },
  {
    id: 4,
    category: 'coding',
    language: 'Python',
    question: `What does this print and why?
class X:
    def __eq__(self, other):
        return True
    def __hash__(self):
        return hash(id(self))

s = {X(): 1, X(): 2, X(): 3}
print(len(s))`,
    options: ["1", "2", "3", "Implementation dependent"],
    answer: "3"
  },
  {
    id: 5,
    category: 'coding',
    language: 'Python',
    question: `What is the output of:
funcs = [lambda x=i: x*i for i in range(1,5)]
print(sum(f() for f in funcs))
Explain binding behavior.`,
    options: ["40", "30", "20", "10"],
    answer: "40"
  },
  {
    id: 6,
    category: 'coding',
    language: 'Python',
    question: `Consider multiple inheritance and MRO:
class A: pass
class B(A): pass
class C(A): pass
class D(B, C): pass
print(D.mro())
Which property holds for the MRO?`,
    options: ["D, B, C, A, object", "D, C, B, A, object", "Depends on interpreter", "Error: inconsistent hierarchy"],
    answer: "D, B, C, A, object"
  },
  {
    id: 7,
    category: 'coding',
    language: 'Java',
    question: `In Java, what does the following print?
class A { static int x; static { x = x++ + ++x; } }
public class Main { public static void main(String[] a) { System.out.println(A.x); } }
Assume standard HotSpot JVM semantics.`,
    options: ["0", "1", "2", "Undefined per JVM"],
    answer: "1"
  },
  {
    id: 8,
    category: 'coding',
    language: 'Java',
    question: `What will this print?
System.out.println((Object)new int[]{1,2} instanceof Object[]);
Explain arrays and boxing.`,
    options: ["true", "false", "compile error", "Depends on JVM version"],
    answer: "false"
  },
  {
    id: 9,
    category: 'coding',
    language: 'Java',
    question: `What is the result of concurrent modification sequencing:
List<Integer> L = Collections.synchronizedList(new ArrayList<>());
// thread1 iterates while thread2 modifies
// Is ConcurrentModificationException guaranteed?`,
    options: ["Guaranteed to throw CME", "Not thrown when using synchronizedList if external sync used correctly", "Behavior unspecified", "No exception but data race"],
    answer: "Not thrown when using synchronizedList if external sync used correctly"
  },
  {
    id: 10,
    category: 'coding',
    language: 'Algorithms',
    question: `You have a weighted directed acyclic graph with possibly exponential number of paths. You need the k shortest simple paths between s and t with k up to 10^6. Which algorithmic approach scales best in practice?`,
    options: ["Yen's algorithm (path deviations)", "Kahn's topological + DP enumerator", "Eppstein's algorithm (implicit heap)", "Dijkstra repeated k times"],
    answer: "Eppstein's algorithm (implicit heap)"
  },
  {
    id: 11,
    category: 'coding',
    language: 'Concurrency',
    question: `On x86, which of these memory orderings is not possible using only normal loads/stores (no fences)?`,
    options: ["Load-load reordering", "Store-load reordering", "Store-store reordering", "Load-store reordering"],
    answer: "Store-load reordering"
  },
  {
    id: 12,
    category: 'coding',
    language: 'C++',
    question: `Given C++17 guaranteed copy elision, what is the observable difference between returning a named local vs prvalue with noexcept move?`,
    options: ["No observable difference (mandatory elision)", "Potential extra copy in debug builds", "Undefined behavior if move throws", "Signature changes at link time"],
    answer: "No observable difference (mandatory elision)"
  },
  {
    id: 13,
    category: 'coding',
    language: 'C++',
    question: `What is printed by this snippet?
#include <iostream>
struct A{A(){std::cout<<"c";}A(const A&){std::cout<<"C";}~A(){std::cout<<"d";}};
A f(){A a; return a;}
int main(){A x = f();}
Possible outputs?`,
    options: ["c d", "c C d d", "c d d (due to elision)", "Compiler dependent"],
    answer: "c d d (due to elision)"
  },
  {
    id: 14,
    category: 'coding',
    language: 'Python',
    question: `What does this print when run under CPython 3.11?
import gc
class X: pass
x = X(); x.r = x
del x
print(gc.collect())
# number of unreachable objects reclaimed`,
    options: ["0", "1", "2", "Implementation dependent"],
    answer: "1"
  },
  {
    id: 15,
    category: 'coding',
    language: 'Systems',
    question: `A process maps a file with mmap() MAP_SHARED, then forks. Both parent and child write different bytes to the same page concurrently (no synchronization). What can be observed?`,
    options: ["Writes are atomically merged", "Writes may race producing any result", "Kernel serializes writes deterministically", "Undefined at user-level but deterministic in kernel"],
    answer: "Writes may race producing any result"
  },
  {
    id: 16,
    category: 'coding',
    language: 'Security',
    question: `Which of these is the strongest mitigation specifically preventing return-oriented programming (ROP) on x86-64?`,
    options: ["DEP (NX)", "ASLR", "CET (shadow stack) + Control-Flow Integrity", "Stack canaries"],
    answer: "CET (shadow stack) + Control-Flow Integrity"
  },
  {
    id: 17,
    category: 'coding',
    language: 'Databases',
    question: `Given two transactions under SERIALIZABLE isolation, one reads then updates a row, the other updates then reads the same row. Which anomaly must be prevented by the DBMS?`,
    options: ["Dirty read", "Lost update", "Write skew", "Phantom read"],
    answer: "Lost update"
  },
  {
    id: 18,
    category: 'coding',
    language: 'Algorithms',
    question: `Which data structure gives O(1) amortized time for add, remove, and get-random-element?`,
    options: ["HashSet only", "ArrayList + HashMap combo", "Treap", "LinkedHashMap"],
    answer: "ArrayList + HashMap combo"
  },
  {
    id: 19,
    category: 'coding',
    language: 'Type Theory',
    question: `In Hindley–Milner type inference, which expression forces you to consider higher-ranked polymorphism (not inferred by standard HM)?`,
    options: ["let id = (lambda x: x) in (id id)", "A function that expects a polymorphic function argument", "Higher-ranked types in ML are inferred automatically", "None of the above"],
    answer: "A function that expects a polymorphic function argument"
  },
  {
    id: 20,
    category: 'coding',
    language: 'Compilers',
    question: `When optimizing tail calls, which transformation must the compiler perform to ensure semantics preservation in presence of stack-unwinding (exceptions)?`,
    options: ["Frame pointer elimination", "Emit unwind info for transformed frames", "Omit unwind info (safe)", "Convert exceptions to error codes"],
    answer: "Emit unwind info for transformed frames"
  },
  {
    id: 21,
    category: 'coding',
    language: 'Python',
    question: `Given this tricky dict/key identity case:
print({True: 'A', 1: 'B'}[True])
Why does it print what it does?`,
    options: ["'A' because booleans are distinct keys", "'B' because True==1 and last inserted wins", "KeyError", "Implementation dependent"],
    answer: "'B' because True==1 and last inserted wins"
  },
  {
    id: 22,
    category: 'coding',
    language: 'C',
    question: `What does sizeof("hello") return in C and why?`,
    options: ["5 because five characters", "6 because null terminator included", "Depends on compiler", "Undefined"],
    answer: "6 because null terminator included"
  },
  {
    id: 23,
    category: 'coding',
    language: 'Concurrency',
    question: `Which lock-free property guarantees that some thread will make progress in a finite number of steps?`,
    options: ["Wait-freedom", "Lock-freedom", "Obstruction-freedom", "Starvation-freedom"],
    answer: "Lock-freedom"
  },
  {
    id: 24,
    category: 'coding',
    language: 'Algorithms',
    question: `Given comparison-based sorting, what is the lower bound on average comparisons to sort n elements?`,
    options: ["O(n)", "Ω(n log n)", "O(n log n)", "Ω(n^2)"],
    answer: "Ω(n log n)"
  },
  {
    id: 25,
    category: 'coding',
    language: 'C',
    question: `Which of these declarations is ill-formed in ISO C?
int arr[0];
int f(void) { return sizeof(arr); }
`,
    options: ["arr[0] is valid in C99", "Zero-length arrays are invalid in standard C", "arr[0] is allowed as flexible array member", "Behavior implementation-defined but allowed"],
    answer: "Zero-length arrays are invalid in standard C"
  },
  {
    id: 26,
    category: 'coding',
    language: 'Security',
    question: `A program uses strncat(dest, src, n). Which of the following is a subtle bug possibility?`,
    options: ["Guaranteed safe if n is src length", "Off-by-one leaving no space for null terminator", "Always safe on modern libc", "Buffer overflow impossible with strncat"],
    answer: "Off-by-one leaving no space for null terminator"
  },
  {
    id: 27,
    category: 'coding',
    language: 'Python',
    question: `What is the result of:
from functools import lru_cache
@lru_cache(None)
def f(n):
    if n<2: return n
    return f(n-1)+f(n-2)
print(f(50))
Why is this fast?`,
    options: ["Memoization reduces to linear time", "Python uses fast native Fibonacci", "Tail-call optimization", "It is still exponential but hardware fast"],
    answer: "Memoization reduces to linear time"
  },
  {
    id: 28,
    category: 'coding',
    language: 'Java',
    question: `Which of the following will cause a compile error in Java 11?`,
    options: ["int x = 10_000;", "double d = 1_2_3.4;", "int y = _50;", "int z = 0b1010;"],
    answer: "int y = _50;"
  },
  {
    id: 29,
    category: 'coding',
    language: 'Algorithms',
    question: `You need to maintain medians in a stream of up to 10^9 numbers with O(log n) update and O(1) median query. Which structure is typical?`,
    options: ["Two heaps (max-heap + min-heap)", "Balanced BST with order-statistics", "Segment tree over value range", "Counting sort buckets"],
    answer: "Two heaps (max-heap + min-heap)"
  },
  {
    id: 30,
    category: 'coding',
    language: 'C++',
    question: `In C++ templates, what does SFINAE stand for and what does it enable?`,
    options: ["Substitution Failure Is Not An Error; enable overload resolution tricks", "Simple Fail Is Not Allowed; disable templates", "Static Failure Is New Error; compile-time error handling", "Substitution Fails, Ignore Attribute"],
    answer: "Substitution Failure Is Not An Error; enable overload resolution tricks"
  }
];

export const aptitudeQuestions: Question[] = [
  {
    id: 31,
    category: 'aptitude',
    question: `A particle moves with acceleration a(t) = k / t^2 for t>0. If v(1)=5 and v(2)=7, find v(4). (k constant)`,
    options: ["9", "8", "7.5", "10"],
    answer: "8"
  },
  {
    id: 32,
    category: 'aptitude',
    question: `Sequence defined by a(n) = a(n-1)^{1/2} * a(n-2)^{1/4}, with a1=16, a2=4. Compute a5.`,
    options: ["2", "4", "8", "16"],
    answer: "2"
  },
  {
    id: 33,
    category: 'aptitude',
    question: `A 3×3 matrix has eigenvalues 2,3,6. If you add 1 to the (1,1) entry only, which of the following is necessarily true about the determinant change?`,
    options: ["Change is +1", "Change is at most 6", "Cannot be determined without eigenvectors", "Determinant increases by product rule"],
    answer: "Cannot be determined without eigenvectors"
  },
  {
    id: 34,
    category: 'aptitude',
    question: `Let f(x) be a 4th-order beam deflection satisfying E I y''''(x) = x^2 with symmetric boundary conditions. What is y(0)?`,
    options: ["0", "Proportional to loading/EI", "Indeterminate without constants", "Depends on slope at boundaries"],
    answer: "0"
  },
  {
    id: 35,
    category: 'aptitude',
    question: `Find N such that φ(N) = 840 (Euler totient). Which option is a valid candidate?`,
    options: ["1001", "1320", "1680", "1540"],
    answer: "1680"
  },
  {
    id: 36,
    category: 'aptitude',
    question: `Solve: the infinite continued fraction x = 1 + 1/(2 + 1/(3 + 1/(4 + ...))). What is x approximately?`,
    options: ["1.434", "1.470", "1.618", "1.732"],
    answer: "1.434"
  },
  {
    id: 37,
    category: 'aptitude',
    question: `Find smallest integer n>1 such that 2^n ≡ 1 (mod 41).`,
    options: ["5", "8", "10", "40"],
    answer: "5"
  },
  {
    id: 38,
    category: 'aptitude',
    question: `A coin is biased: P(H)=p. You toss until you see HT. Expected waiting time?`,
    options: ["1/(p(1-p))", "1/(1-p)", "(1+p)/(p(1-p))", "1/p"],
    answer: "(1+p)/(p(1-p))"
  },
  {
    id: 39,
    category: 'aptitude',
    question: `Let S be sum of first 12 primes. Which is S?`,
    options: ["197", "199", "198", "200"],
    answer: "197"
  },
  {
    id: 40,
    category: 'aptitude',
    question: `A and B together can do a job in 12 days. A alone takes 20 days more than B alone. How many days does A take?`,
    options: ["30", "40", "20", "24"],
    answer: "30"
  },
  {
    id: 41,
    category: 'aptitude',
    question: `Find time between 4 and 5 o'clock when hour and minute hands are at right angle (closest after 4:00).`,
    options: ["4:21 9/11", "4:38 2/11", "4:32 8/11", "4:15 5/11"],
    answer: "4:21 9/11"
  },
  {
    id: 42,
    category: 'aptitude',
    question: `A walks 5 km/h for 2 h, then 4 km/h for 3 h. Average speed?`,
    options: ["4.4 km/h", "4.6 km/h", "4.8 km/h", "5 km/h"],
    answer: "4.6 km/h"
  },
  {
    id: 43,
    category: 'aptitude',
    question: `Sum of ages A+B+C =75. Five years ago ratios were 3:4:5. What is present age of C?`,
    options: ["30", "25", "35", "40"],
    answer: "30"
  },
  {
    id: 44,
    category: 'aptitude',
    question: `Series: 11,14,12,15,13,16,... Next term?`,
    options: ["14", "16", "17", "18"],
    answer: "14"
  },
  {
    id: 45,
    category: 'aptitude',
    question: `BOOK : PAPER :: BRICK : ? (analogy by raw material)`,
    options: ["CLAY", "STONE", "HOUSE", "WALL"],
    answer: "CLAY"
  },
  {
    id: 46,
    category: 'aptitude',
    question: `Rectangle diagonal 10 cm, one side 6 cm. Other side?`,
    options: ["8 cm", "6 cm", "4 cm", "5 cm"],
    answer: "8 cm"
  },
  {
    id: 47,
    category: 'aptitude',
    question: `What is 15% of 240?`,
    options: ["36", "34", "32", "30"],
    answer: "36"
  },
  {
    id: 48,
    category: 'aptitude',
    question: `How many diagonals does a decagon have?`,
    options: ["35", "40", "45", "50"],
    answer: "35"
  },
  {
    id: 49,
    category: 'aptitude',
    question: `Rearrange letters 'NITRA' to get a:`,
    options: ["Metal", "River", "Continent", "Country"],
    answer: "Country"
  },
  {
    id: 50,
    category: 'aptitude',
    question: `Cube root of 3375?`,
    options: ["15", "12", "18", "20"],
    answer: "15"
  },
  {
    id: 51,
    category: 'aptitude',
    question: `A farmer sold a cow for $840 at loss of 16%. Cost price?`,
    options: ["$1000", "$960", "$1050", "$750"],
    answer: "$1000"
  },
  {
    id: 52,
    category: 'aptitude',
    question: `Which number is odd one out: 11,23,36,47,59?`,
    options: ["36", "23", "47", "59"],
    answer: "36"
  },
  {
    id: 53,
    category: 'aptitude',
    question: `A is father of B. B is father of C. C is brother of D. How is A related to D?`,
    options: ["Grandfather", "Father", "Uncle", "Cousin"],
    answer: "Grandfather"
  },
  {
    id: 54,
    category: 'aptitude',
    question: `What day of week was 1 Jan 1990?`,
    options: ["Monday", "Sunday", "Friday", "Wednesday"],
    answer: "Monday"
  },
  {
    id: 55,
    category: 'aptitude',
    question: `Quantity increased by 20% then decreased by 20%. Net change?`,
    options: ["4% decrease", "No change", "4% increase", "8% decrease"],
    answer: "4% decrease"
  },
  {
    id: 56,
    category: 'aptitude',
    question: `Choose the word different: (Lion, Tiger, Leopard, Bear)`,
    options: ["Lion", "Tiger", "Leopard", "Bear"],
    answer: "Bear"
  },
  {
    id: 57,
    category: 'aptitude',
    question: `Sum of first 12 prime numbers?`,
    options: ["197", "199", "198", "200"],
    answer: "197"
  },
  {
    id: 58,
    category: 'aptitude',
    question: `A can do work in 15 days, B in 20 days. They work 4 days together. Fraction left?`,
    options: ["8/15", "7/15", "1/4", "1/10"],
    answer: "8/15"
  },
  {
    id: 59,
    category: 'aptitude',
    question: `If 20 men build 56 m wall in 6 days, how long can 35 men build in 3 days?`,
    options: ["49 meters", "52 meters", "56 meters", "47 meters"],
    answer: "49 meters"
  },
  {
    id: 60,
    category: 'aptitude',
    question: `Ladder foot 4.6 m from wall, angle of elevation 60°. Ladder length?`,
    options: ["9.2 m", "8.4 m", "10.2 m", "7.8 m"],
    answer: "9.2 m"
  }
];

export const allQuestions = [...codingQuestions, ...aptitudeQuestions];
