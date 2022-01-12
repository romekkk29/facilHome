
    //declarando variables
let body =document.querySelector("body");
let logo1=document.querySelector("#logo1");
let form=document.querySelector("form");
let button=document.querySelector("button");
let header=document.querySelector("header");


//pagina de inicio con TIMEOUT
setTimeout(function(){
    body.classList.remove("setTime");
    logo1.classList.add("hidden");

},1500);
setTimeout(function(){
    form.classList.remove("hidden"); 
    button.classList.remove("hidden"); 
    header.classList.remove("hidden");
    header.style.backgroundColor="white";
},2500);


