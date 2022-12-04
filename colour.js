const button=document.getElementById("colour-btn");
const body=document.body;
const colours=['red','blue'];
body.style.backgroundColor= colours[0];
button.addEventListener("click",changebg);
function changebg(){
    const i= Math.floor(Math.random()*colours.length);
    body.style.backgroundColor= colours[i];
}