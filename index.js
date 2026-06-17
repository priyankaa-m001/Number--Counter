const decrement = document.getElementById("decrementbtn");
const reset = document.getElementById("resetbtn");
const increment = document.getElementById("incrementbtn");
const counter = document.getElementById("counter");

let count=0;

increment.onclick=function(){
    count++;

    counter.textContent=count;
}

decrement.onclick=function(){
    count--;

    counter.textContent=count;
}

reset.onclick=function(){
    count=0;

    counter.textContent=count;
}

