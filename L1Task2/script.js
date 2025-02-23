const btn = document.querySelector('.btn');

btn.addEventListener('click',()=>{
    btn.style.backgroundColor= 'lightblue';
    btn.style.color='black';
})

let container=document.querySelector(".container");
let timeNow = new Date().getHours();
console.log(timeNow);
let greeting = timeNow >= 5 && timeNow < 12 ? "Good Morning": timeNow >= 12 && timeNow < 18 ?
 "Good AfterNoon":
"Good Evening";
console.log(greeting);

container.innerHTML= `<h1>${greeting}</h1>`;

function add(){
    document.f1.t3.value=parseInt(document.f1.t1.value)+parseInt(document.f1.t2.value)
}
function sub(){
    document.f1.t3.value=parseInt(document.f1.t1.value)-parseInt(document.f1.t2.value)
}
function mul(){
    document.f1.t3.value=parseInt(document.f1.t1.value)*parseInt(document.f1.t2.value)
}
function div(){
    document.f1.t3.value=parseInt(document.f1.t1.value)/parseInt(document.f1.t2.value)
}
