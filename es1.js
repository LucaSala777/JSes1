document.addEventListener("DOMContentLoaded", addBtn);
var addBtn=function (){
    var btn= document.createElement("button");
    btn.innerHTML="NON CLICCARE";

    document.getElementById("body1").append(btn);
    button.addEventListener("click", addBtn);
}

var span1 = document.getElementById("span1");
console.log("document: ", document);
console.log("span1 ", span1);
var testo = span1.innerHTML;
console.log("testo ", testo);


var button=document.getElementById("btn1");
var changeColor=function(){
    console.log("Buongiornissimo"); 
    document.getElementById("div1").setAttribute("style", "background-color:  rgb(163, 36, 68)");
    span1.innerHTML="CUCU";
    document.getElementById("div1").innerHTML="<h2>Ti ho detto di non premerlo</h2>";
};
button.addEventListener("click", changeColor);


