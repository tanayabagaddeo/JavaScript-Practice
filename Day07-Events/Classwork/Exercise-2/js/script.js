// let element = document.getElementById("name1");
//Form Events: onfocus, onblur
const handleFocus=(ele)=>{
 ele.setAttribute('placeholder', 'Tanaya Bagaddeo');
 ele.style.fontSize='30px';
}

const handleBlur=(ele)=>{
ele.style.border="1px solid red";
ele.style.fontSize='20px';
}
//Form Events: onchange

const element=document.getElementById("box");

const changedColor = (clr)=>{
element.style.backgroundColor=clr;
//document.getElementById("box").style.backgroundColor=clr;
}