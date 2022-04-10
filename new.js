/* General function for fahrenheit to celsius*/ 

function main(){
    var f=document.getElementById("input");
    var c;
    c=(f-32)*0.5556;
    f.innerHTML=c;
}