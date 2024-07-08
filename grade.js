//grades function requires a integer to be graded as per the instruction given.
// prompting user for the marks
let marks = prompt("Enter your marks");
function grades(){
// This is to ensure that the input is a relevant and required data type so as to avoid errors.
    if(marks < 0 || marks > 100 || marks == isNaN){
        alert ('Invalid input.Enter marks between 0 and 100')
    }
    let grade = '';
//the conditions for grading marks .
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 69) {
        grade = "B";
    } else if (marks >= 59) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }
    alert (`You have a ${grade}`);
}
//running the function
grades()
