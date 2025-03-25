let mathsMarks = parseInt(prompt('Enter marks in Maths'));
let sciMarks = parseInt(prompt('Enter marks in Science'));
let engMarks = parseInt(prompt('Enter marks in English'));
let percentage = ((mathsMarks + sciMarks + engMarks) / 3);
let grade;

if (percentage > 80) {
   grade= 'A';
} else if (percentage > 60) {
   grade= 'B';
} else if(percentage > 40){
   grade= 'C';
}else{
    // grade = D;
}

switch (grade) {
    case 'A':
        console.log(`Congratulations! you got grade A with ${percentage} %`);
        break;
    case 'B':
        console.log(`Congratulations! you got grade B with ${percentage} % . There are chances of improvement`);
        break;
    case 'C':
        console.log(`Congratulations! you got grade C with ${percentage} %.Try hard next time`);
        break;
    default:
    console.log(`You got grade D with ${percentage} %. Please contact your teacher`);
}