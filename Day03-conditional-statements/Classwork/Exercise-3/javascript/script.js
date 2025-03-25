let mathsMarks = parseInt(prompt('Enter marks in Maths'));
let sciMarks = parseInt(prompt('Enter marks in Science'));
let engMarks = parseInt(prompt('Enter marks in English'));
let percentage = ((mathsMarks + sciMarks + engMarks)/3);

if(percentage > 80){
    console.log(`Congratulations! you got grade A with ${percentage} %`);
}else if(percentage > 60){
    console.log(`Congratulations! you got grade B with ${percentage} % . There are chances of improvement`);
}else if(percentage > 40){
    console.log(`Congratulations! you got grade C with ${percentage} %.Try hard next time`);
}else{
    console.log(`You got grade D with ${percentage} %. Please contact your teacher`);
}
