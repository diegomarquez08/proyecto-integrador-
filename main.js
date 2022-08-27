console.log("hola putos como estan?");
var myButton = document.getElementById("mi_boton");
var myText=document.getElementById("mi_text");
var count=0;
myButton.onclick = function()
{
count++;
myText.innerHTML = count;



}

