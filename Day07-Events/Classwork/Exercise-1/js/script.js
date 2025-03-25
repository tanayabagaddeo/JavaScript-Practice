//Mouse Events: onclick
let box = document.getElementById("box");
function changeStyle(){
box.style.backgroundColor="#DF6D14";
box.style.border="5px dashed black";
}

//Mouse Events: onmousedown, onmouseup
document.getElementById("eyeIcon").onmousedown=()=>{
    document.getElementById("passwordBox").setAttribute('type', 'text');
    document.getElementById("eyeIcon").setAttribute('class', 'fa-solid fa-eye');
}
document.getElementById("eyeIcon").onmouseup=()=>{
    document.getElementById("passwordBox").setAttribute('type', 'password');
    document.getElementById("eyeIcon").setAttribute('class', 'fa-solid fa-eye-slash');
}
//Mouse Events: onmouseover, onmouseout
let apples="./images/apples.jpg";
let cherries="./images/cherries.jpg";

// document.getElementById("imgFruit").onmouseover=()=>{
//     document.getElementById("imgFruit").setAttribute('src', cherries);
// }

document.getElementById("imgFruit").onmouseenter=()=>{
    document.getElementById("imgFruit").setAttribute('src', cherries);
}

// document.getElementById("imgFruit").onmouseout=()=>{
//     document.getElementById("imgFruit").setAttribute('src', apples);
// }

document.getElementById("imgFruit").onmouseleave=()=>{
    document.getElementById("imgFruit").setAttribute('src', apples);
}

