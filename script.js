let selected = document.querySelector("aside span");
let submit = document.querySelector(".button");

let op1 = document.querySelector(".one");
let op2 = document.querySelector(".two");
let op3 = document.querySelector(".three");
let op4 = document.querySelector(".four");
let op5 = document.querySelector(".five");

let options = (value) => {
    sessionStorage.setItem("rating", " "+value);
    console.log(" "+value);
}

let storage = sessionStorage.getItem("rating");
console.log(storage);
selected.innerHTML = storage;