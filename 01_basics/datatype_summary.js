//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions


//Array
const heros = ["shaktiman", "naagraj", "doga"];


//Object
let myObj = {
    name: "hitesh",
    age: 22,
}


//function
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


//read this link to see what does typeof return for everydatatype
// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Stack and Heap Memory

//  Primitive datatypes are assigned  stack memory
//  Reference data types are assigned heap memory

let name = "Sarvesh"
let fullname=name

fullname="SarveshBirla"
  // Although fullName is changes name remains same
  // because primitive data types are assigned stack memory and in this memory copy of name was assigned to fullname
console.log(name)
console.log(fullname)


let p1 ={
    email:"abc@gmail.com",
    password:"123456",
}
let p2 = p1 ;

p2.email="bcd@gmail.com"


// Although p2->email was changed , p1->email also get changed because object are assigned heap memory,
// p1,p2 references to same heap memory ,hence p1.email is changed leads to change in p2.email

console.log(p1.email)
console.log(p2.email)


