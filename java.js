var hr=document.getElementById("hr");
var mn=document.getElementById("mn");
 var se=document.getElementById("se");
 var am=document.getElementById("am");

function clock(){

let h = new Date().getHours();
let m  = new Date().getMinutes();
let s = new Date().getSeconds();
let a = "AM";


if(m<10){
    m="0" + m;

}
if(s<10)
{
    s="0" + s;
}
if(h > 12)
{
    h-=12;
    a ="PM";
}
if(h<10)
{
    h="0" + h;
}
  hr.innerText = h;
  mn.innerText = m;
  se.innerText = s;
  am.innerText = a;

setTimeout(()=> {
    clock();
},1)
}
clock();
