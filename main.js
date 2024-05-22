// Multi-Dimensional Array and Tuples - Student Grades.
var student = [
    {
        name: "Nabeela",
        grades: [90, 70, 80, 75, 85]
    },
    {
        name: "Wania",
        grades: [63, 78, 60, 70, 79]
    },
    {
        name: "Saba",
        grades: [90, 85, 72, 50, 92]
    },
];
function calculateAverageGrade(grades) {
    var sum = grades.reduce(function (acc, current) {
        return acc + current;
    }, 0);
    return sum / grades.length;
}
student.forEach(function (student) {
    var averageGrade = calculateAverageGrade(student.grades);
    console.log("Name: ".concat(student.name));
    console.log("Average grade: ".concat(averageGrade.toFixed(2)));
    console.log();
});
var employees = [
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
];
function calculateSalary(employees) {
    var baseSalary = employees.salary;
    var hourlyWage = employees.hourlyRate * employees.hoursWorked;
    var bonus = employees.hoursWorked >= 20 ?
        baseSalary * 0.1 : 0;
    return baseSalary + hourlyWage + bonus;
}
employees.forEach(function (employees) {
    var salary = calculateSalary(employees);
    console.log("Name: ".concat(employees.name));
    console.log("Salary: ".concat(salary.toFixed(2)));
    console.log();
});
