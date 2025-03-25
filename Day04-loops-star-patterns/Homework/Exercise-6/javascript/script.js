//Print a table of 5 using a for loop.

for (let count = 1; count <= 10; count++) {
    console.log(count * 5);
    document.getElementById("odds").innerText += count * 5;
    document.getElementById("odds").innerHTML += "<br>";
}
