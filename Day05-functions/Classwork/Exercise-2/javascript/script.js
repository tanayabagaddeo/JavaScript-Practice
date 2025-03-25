// Write a program to print the average marks of three subjects of a student.

function average(){
  let marks1=parseInt(prompt("Enter marks 1"));
  let marks2=parseInt(prompt("Enter marks 2"));
  let marks3=parseInt(prompt("Enter marks 3"));
  console.log("Average marks of the student: " + (marks1 + marks2 + marks3)/3);
  document.write((marks1 + marks2 + marks3)/3);
}
average();