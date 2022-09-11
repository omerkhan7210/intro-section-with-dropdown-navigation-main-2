

/*
var header = document.getElementById("header");
header.innerHTML = `

`;



var prompt_value = window.prompt("Enter your name:");
if(prompt_value == "omer"){
    window.alert("OMER!!");
}else{
    window.alert("IRMA!!");
}*/

var button_open = document.getElementById("btn_open");
var button_close = document.getElementById("btn_close");
var list = document.getElementById("list");

button_open.addEventListener("click",function (){
    list.classList.add("show");
});

button_close.addEventListener("click",function(){
    list.classList.remove("show");
});













