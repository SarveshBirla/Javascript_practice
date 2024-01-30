// Date 

let mydate=new Date();
// console.log(mydate.toString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toDateString());

console .log(typeof mydate);

//Date(Year,month(0-based Indexing),date,hours,minutes,seconds..)

//let myCreatedDate=new Date(2003,10,2) // 2 November 2003
//let myCreatedDate=new Date(2003,10,2,12,30);

// mm-dd-yyyy

let myCreatedDate=new Date("11-02-2003")
// console.log(myCreatedDate.toDateString());

let myTimeStamp=Date.now(); // This give number of milliseconds from 1 Jan 1970 to now

console.log(myTimeStamp);
console.log(myCreatedDate.getTime())// This also gives number of milliseconds from 1 jan 1970 to date stored in myCreatedDate

let currTime=new Date();
console.log(currTime.getDate());
console.log(currTime.getMonth());
// ..etc functions can be used


// IMP : Locale String can be Customised

currTime.toLocaleString('default',{
    weekday: "long",
})

