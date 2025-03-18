
let one = document.getElementById("one").onclick = oning
let two = document.getElementById("two").onclick = twoing
let three = document.getElementById("three").onclick = threeing
let four = document.getElementById("four").onclick = fouring
let five= document.getElementById("five").onclick = fiveing
let six = document.getElementById("six").onclick = sixing
let seven = document.getElementById("seven").onclick = sevening
let eight = document.getElementById("eight").onclick = eighting
let nine = document.getElementById("nine").onclick = nineing

let plus = document.getElementById("plus").onclick = plusing
let minus = document.getElementById("minus").onclick = minusing
let modul = document.getElementById("modul").onclick = moduling
let multi = document.getElementById("multi").onclick = multing
let div = document.getElementById("div").onclick = diving


let display = document.getElementById("display")
let equal = document.getElementById("equal").onclick = equaling

let erase = document.getElementById("erase").onclick = function(){
    display.innerHTML = ''
}



function oning(){
    display.innerHTML += 1
}
function twoing(){
    display.innerHTML += 2
}
function threeing(){
  display.innerHTML += 3
}
function fouring(){
  display.innerHTML += 4
}
function fiveing(){
  display.innerHTML += 5
}
function sixing(){
  display.innerHTML += 6
}
function sevening(){
  display.innerHTML += 7
}
function eighting(){
  display.innerHTML += 8
}
function nineing(){
  display.innerHTML += 9
}



let first;
let op;


function plusing(){
     first = display.textContent;
     display.innerHTML = ""
     op="+"

}
function minusing(){
    first = display.textContent;
     display.innerHTML = ""
      op="-"
}
function moduling(){
  first = display.textContent;
   display.innerHTML = ""
    op="%"
}
function multing(){
    first = display.textContent;
     display.innerHTML = ""
      op="*"
}
function diving(){
    first = display.textContent;
     display.innerHTML = ""
      op="/"
}


function equaling(){

  let second = display.textContent;

if(op=="+")
  {
    display.innerHTML = Number(first)+Number(second)
  }
else if(op=="-")
    {
      display.innerHTML = Number(first)-Number(second)
    }
else if(op=="%")
    {
      display.innerHTML = Number(first)%Number(second)
    }
else if(op=="*")
    {
      display.innerHTML = Number(first)*Number(second)
    }
else if(op=="/")
    { 
      display.innerHTML = Number(first)/Number(second)
    }


else{
      alert("enter valid operation")
    }
}


