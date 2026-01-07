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

  let studentsWithGrade = students.map(student=>{

    let grade="";
    if(student.score>=90)
        grade="A";
    else if(student.score<90 && student.score>=80)
        grade="B";
    else if(student.score<80 && student.score>=70)
        grade="C";

    return {
        name:student.name,
        score:student.score,
        grade
    }
  }).filter(val=>{
    if(val.grade!="")
        return val;
  }).sort((a,b)=>a.grade.localeCompare(b.grade));

  return studentsWithGrade
}

const result = transformStudents(students);
console.log(result);