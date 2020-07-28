//Event Listeners
document.getElementById("createStudent").addEventListener("click", createStudent);
document.getElementById("searchForStudent").addEventListener("click", searchForStudent)
document.getElementById("deleteStudent").addEventListener("click", deleteStudent)
//Associative array
let students = {
    Doug: "A",
    Liz: "B",
    Elijah: "C",
    Lucy: "D"
}
//Index arrays
let percentageGrade = []
let studentNames = []
//Create new student
function createStudent() {
    let student = document.getElementById("studentName").value;
    let gr = document.getElementById("studentGrade").value;
    //Call upon checkGrade
    document.getElementById("displayStudents").innerHTML = "Student Name: " + student + " Student Letter Grade: " + checkGrade(gr) + " Student Percentage Grade: " + gr + "."
    students[student] = checkGrade(gr);
    percentageGrade.push(gr);
    studentNames.push(student);
}
function checkGrade(grade) {
    if (grade>80) {
        return 'A';
    } else if (grade>70) {
        return 'B';
    } else if (grade>60) {
        return 'C'
    } else if (grade>50) {
        return 'D'
    } else {
        return 'F'
    }
}
function searchForStudent() {
    //Get user value
    let search = document.getElementById("search").value;
    let gr = document.getElementById("studentGrade").value;
    document.getElementById("displaySearch").innerHTML =  checkIf(search, gr) 
    
}
function checkIf(item) {
    let found = 0
    for (let i = 0; i < studentNames.length; i++) {
        if (studentNames[i] == item) {
            found ++;
            return "We found what you were looking for: " + studentNames[i] + " Her grade is %" + percentageGrade[i] + ".";
        }
    } 
    if (found !=1) {
        return "We could Not Find Student";
    }
}
//Delete
function deleteStudent() {
    let del = document.getElementById("delete").value;
    //Call upon delete
    eraseStudent(del);
}
function eraseStudent(item) {
    //Delete item from array
    for (let i = 0; i < studentNames.length; i++) {
        if (studentNames[i] == item) {
            studentNames.splice(i, 1);
            percentageGrade.splice(i, 1)
        }
    } 
}