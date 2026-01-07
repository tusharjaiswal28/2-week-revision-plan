## Q: 3

Array Transformation with Multiple Operations
Write a function transformStudents that takes an array of student objects and performs multiple transformations.

Requirements:

Filter students who scored above 70
Add a grade property based on score: A (90-100), B (80-89), C (70-79)
Sort by score in descending order
Return only name, score, and grade
Test Case:

const students = [
  { id: 1, name: 'Alice', score: 85, age: 20 },
  { id: 2, name: 'Bob', score: 92, age: 22 },
  { id: 3, name: 'Charlie', score: 68, age: 21 },
  { id: 4, name: 'David', score: 78, age: 23 },
  { id: 5, name: 'Eve', score: 95, age: 20 },
  { id: 6, name: 'Frank', score: 71, age: 22 }
];

function transformStudents(students) {
  // Your implementation here
}

const result = transformStudents(students);
console.log(result);

/* Expected Output:
[
  { name: 'Eve', score: 95, grade: 'A' },
  { name: 'Bob', score: 92, grade: 'A' },
  { name: 'Alice', score: 85, grade: 'B' },
  { name: 'David', score: 78, grade: 'C' },
  { name: 'Frank', score: 71, grade: 'C' }
]
*/