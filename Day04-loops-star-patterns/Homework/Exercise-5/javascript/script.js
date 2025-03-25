//Print odd numbers from 101 to 110 using a for loop.

for(let count = 101; count<=110; count++){
    if(count%2 !== 0){
        console.log(count);
document.getElementById("odds").innerText += count;
document.getElementById("odds").innerHTML += "<br>";

    }
}
