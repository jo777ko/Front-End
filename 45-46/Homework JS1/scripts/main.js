"use strict";

//Task 1

const a = prompt("Enter some numbers");
const b = prompt("Enter some numbers");

if(a < b){
    console.log(b);
} else if(a == b) {
    console.log(a);
} else {
    console.log(a);
}

//Task 2

const c = prompt("Enter any value");
if (c > 0){
    console.log("Value is positive");
} else if (c == 0){
    console.log("Value is zero");
} else {
    console.log("Value is negative");
}

//Task 3

let admin;
let name;
name = "Geork";
admin = name;
console.log(admin);

//Task 4

console.log("оливье" > "ананас");  //потому что "o" стоит в алфавите после буквы "a"
console.log("оливье" < "ананас");

console.log("кодировка" > "котировка");     //потому что "т" стоит в алфавите после буквы "д"
console.log("кодировка" < "котировка");

console.log("22" > "222");          // 222 > 22
console.log("22" < "222");

//Task 5

const age = prompt("Enter you age: ");
if (age > 17) {
    console.log("You are welcom");
} else {
    console.log("You can't come here");
}

//Task 6

let newArray = new Array;
for(let i = 0; i < newArray.length; i++){
    if(newArray[i] % 2 ===0 ){
        console.log(newArray[i]);
    }
}

//Task 7

const carsArray = ["Opel", "VW", "Audi", "BMW", "MB", "Fiat","Shkoda", "Nissan"];
for(let i = carsArray.length - 1; i >= 0; i-=2){
    console.log(carsArray[i]);
}

//Task 8

const arrayOfNumbers = [5, 3, 8, 51, 9, 24];
let evenValue = 0;
let onevenValue = 0;
for( let i = 0; i < arrayOfNumbers.length; i++){
    if(arrayOfNumbers[i] %2 === 0){
        evenValue += arrayOfNumbers[i];
        
    }else {
        onevenValue += arrayOfNumbers[i];
    }    
}

if (evenValue > onevenValue){
    console.log(evenValue - onevenValue);
} else {
    console.log(onevenValue - evenValue);
}

//Task 9

let userDate = new Object();
let user = {
    name: "Geork",
    age: 30,
    jobTitle: "Operator",
    city: "Kalish",
    id: 64482
}

console.log(user);

//Task 10

let max = arrayOfNumbers[0];
for (let b = 1; b < arrayOfNumbers.length; b++) {
    if( arrayOfNumbers[b] > max ) {
        max = arrayOfNumbers[b];
    }
}
console.log(max);