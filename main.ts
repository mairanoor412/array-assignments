
// Multi-Dimensional Array and Tuples - Student Grades.

// 1. Define a TypeScript type alias named Student to represent a student with the
// following properties:
// • name (string): The name of the student.
// • grades (number[ ]): An array of grades for different subjects.
// 2. Create an array named students containing at least three student objects. Each student
// object should include a name and an array of grades.
// 3. Implement a function named calculateAverageGrade that takes a student's grades as
// input and returns the average grade for that student.
// 4. Display each student's name and average grade. Iterate through the students array,
// calculate the average grade for each student using the calculateAverageGrade
// function, and print their name and average grade.

type Student ={
    name: string,
    grades: number[],
};

let student : Student[] = [
    {
        name: "Nabeela",
        grades: [90 , 70 , 80 , 75 , 85]  
    },

    {
        name: "Wania",
        grades: [63 , 78 , 60 , 70 , 79] 
    },

    {
        name: "Saba",
        grades: [90 , 85 , 72 , 50 , 92]
        
    },
    
]

function calculateAverageGrade (grades:number[]){
    const sum = grades.reduce((acc , current) =>
    acc + current , 0);
    return sum / grades.length;
}

student.forEach((student) => {
    const averageGrade = calculateAverageGrade(student.grades);
    console.log(`Name: ${student.name}`);
    console.log(`Average grade: ${averageGrade.toFixed(2)}`);
    console.log(); 
});


// Array with types and Indexing - Employee Salaries.

// You are managing employee salaries for a company. Implement logic to calculate salaries and 
// handle bonuses.
// 1. Define a type alias named Employee with the following properties:
// * name (string): The name of the employee.
// * hoursWorked (number): The number of hours the employee worked.
// * hourlyRate (number): The hourly rate of the employee.
// * salary (number): The base salary of the employee.
// 2. Define an array named employees containing employee objects. Each employee 
// object should include a name, hoursWorked, hourlyRate, and salary.
// 3. Implement a function named calculateSalary that calculates the salary for each 
// employee based on the hours worked and hourly rate.
// 4. If an employee has worked 20 hours or more, apply a 10% bonus to their salay.

type Employee ={
    name: string,
    hoursWorked: number,
    hourlyRate: number,
    salary: number,
}

let employees : Employee[] =[
    {
     name: "Talha",
     hoursWorked: 20,
     hourlyRate: 25,
     salary: 30000,
    },

    {
        name: "Ali",
        hoursWorked: 22,
        hourlyRate: 30,
        salary: 40000,
       },

       {
        name: "Hamza",
        hoursWorked: 25,
        hourlyRate: 35,
        salary: 50000,
       },

]

function calculateSalary (employees){
const baseSalary = employees.salary;
const hourlyWage = employees.hourlyRate * employees.hoursWorked;
const bonus = employees.hoursWorked >= 20 ?
baseSalary *0.1 :0;
return baseSalary + hourlyWage + bonus;
}

employees.forEach((employees) =>{
    const salary = calculateSalary(employees)
    console.log(`Name: ${employees.name}`);
    console.log(`Salary: ${salary.toFixed(2)}`);
    console.log();
    
});
