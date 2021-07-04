// DAY - 1
// What is javascript ? - Why we need javascript? - 
// Syntax -  Comments -  Variables - Numbers
// - Datatypes -  Functions -  Object -  Loops - Strings

// variables 

// var . let . const 

//global varible 
// reassign

// var a = 10;
// var a = 100;
// console.log(a);

// {
//     a = 90;
//     console.log(a);
// }


//let - Block scope 
// cannot be reassign


// {
// let b = 100;
// console.log(b);
// }

// console.log(b);

// const pi = 3.14;
// pi = 3.14 + 20;
// console.log(pi); // const variables cannot be changed

//Datatypes
//primitive - strings , number , boolean , undefined , null
//Non - primitive - object , array , RegEx


// var lan = "javascript is easy";
// console.log("length : ",lan.length);
// console.log("substring : ",lan.substring(0,3)) // 3 - 1
// console.log(lan.replace("java","live"));
// console.log(lan.toUpperCase());
// console.log(typeof lan.charAt(0));
// console.log(lan.charCodeAt(1));
// console.log(lan.trim())
// console.log(lan.concat(" Day 1"))
// console.log(lan.split(" "))


// // Guess the output 
// let h = "hello world";
// h[0]  = "A";
// console.log(h);


//Numbers 

// var a = 12e5;
// var b = 12e-5;

// console.log(a," ", b)

// var c = 9999999999999999;
// console.log(c);

// //gues the output 

// if(0.1+0.2 == 0.3){
//     console.log("both are equal");
// }
// else{
//     console.log("both are unequal");
// }

// let g = 100/"hello" // Nan
// console.log(g , typeof g)
// let h = 3 / 0 
// console.log(h , typeof h)  

// let i = -3 / 0
// console.log(i)

// let x = 500;
// let y = new Number(500)
//    // ==  // ===
// if(x === y){
//     console.log("equal")  
// } 
// else{
//     console.log("not eequal")
// }


// alert , prompt , confirm 

// var a = Number(prompt("Enter a value")) // default value as string 
// var b = Number(prompt("Enter b value"))
// console.log(a+b)


//confirm 
// var a = confirm("Are you sure want to exit ????")
// console.log(a);


//Boolean - true or false;

//Everything with a value is true
//Everything without a value is False
// let x = 10;
// console.log(Boolean(x));

// var g = null;
// console.log(Boolean(g));

// let g = 100/"10"
// console.log(g);

// let x = false; // return boolean 
// let y = new Boolean(false) // return object

// console.log(typeof x , typeof y)

// if( x === y){
//     console.log("equal")
// }
// else{
//     console.log("not equal");
// }

//undefined
// let a;
// console.log(a);

// let value = null;
// console.log(value)

// console.log("type of null : ", typeof(null))
// console.log("type of undefined : " , typeof(undefined))


//Non - primitive 
//Objects - >  mutable 
//car -> color , speed , name 
//method ->  getName() , getSpeed() , 


// person.age = 45;
// console.log(person)


// var person = new Object();
// person.firstName = "John";
// person.lastName = "Wick";
// person.age = 35;
// person.height=180;

// console.log(person)


// function functionName(){
//     //statement
// }

//  function add(a, b){
//   console.log("addition is called !!!" , a+b)
// }

// add(12 , 12);

//Guess the output 

// console.log((12+12)+" "+12)

//this
// function person(firstName, lastName , height){
//    this.firstName = firstName;
//    this.lastName = lastName;
//    this.height = height;
// }

// var person_one = new person("Arya","Stark",160);
// var person_two = new person("Jon","Snow",180)
// console.log(person_one)
// console.log(person_two)


// const person = {
//     firstName : "John",
//     lastName : "Wick",
//     age:35,
//     height: 180,
//     getName: function(){
//         return this.firstName+" "+this.lastName;
//     }
// }

// console.log(person.color);
// console.log(person.getName())

//Arrays


var arr = [
    "apple" , 12, true , "milky bar"
]
apple
 -5 -4 -3 -2-1
var c = arr[0];
console.log(c.slice(-4 , -3)) // p 


arr.push("van") // last insertion
console.log(arr);

arr.pop() // delete the last element
console.log(arr)

arr.unshift("first");
console.log(arr);

console.log(arr.sort())
arr.push(1)
console.log(arr.sort())