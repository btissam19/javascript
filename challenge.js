//challenge 1
let cardTitle="Elzero",cardDescription= "Elzero Web School",cardDate="25/10";
let content=`
 <div class="parent">
 <h3>${cardTitle}</h3>
 <p>${cardDescription}</p>
 <span>${cardDate}</span>
 </div>
`;
let contentRepeatet= content.repeat(4);
document.write(contentRepeatet);
//challenge 2
let d = "-100";
let e = "20";
let f = 30;
let g = true;
console.log(-d*(+e)); 
console.log(-d + +e +f + 23*g);
//challenge 3
let a = 100;
let b = 2_00.5;
let c = 1e2;
let dd = 2.4;
console.log(b)
// Find Smallest Number In All Variables And Return Integer
console.log(Math.min(a,b,c,dd));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a,parseInt(dd))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(parseInt(dd));
console.log(Math.floor(dd));
console.log(Math.round(dd));
console.log(Math.trunc(dd));

// Use Variables b + d To Get This Valus
console.log((parseInt(b)/Math.ceil(dd)).toFixed(2)); // 66.67 => String
console.log(Math.round(parseInt(b)/Math.ceil(dd))); // 67 => Number


//string challenge

console.log("%cstring challenge","color:red");

let aa = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(aa.charAt(2).toUpperCase()+aa.slice(3,6)); // Zero

// 8 H
console.log(aa.indexOf("h")); // HHHHHHHH
console.log(aa.charAt(13).toUpperCase().repeat(8));
// Return Array
console.log(aa.split(" ",1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(aa.substr(0,6)+ " " +aa.substr(aa.indexOf("S"))); // Elzero School
console.log(`${aa.substr(0,6)} ${aa.substr(aa.indexOf("S"))}`);
// Solution Must Be Dynamic Because String May Changes
console.log(`${aa.charAt(0).toLowerCase()}${aa.slice(1).toUpperCase()}`); // eLZERO WEB SCHOOl


// if and else challenge

/*
  If Condition Challenge
*/
console.log("%cif challenge","color:red;font-size:bold");
let a3 = 10;

// if (a < 10) {
//   console.log(10);
// } else if (a >= 10 && a <= 40) {
//   console.log("10 To 40");
// } else if (a > 40) {
//   console.log("> 40");
// } else {
//   console.log("Unknown");
// }
a3 <10 ?onsole.log(10):a3>=10 && a3<=40?console.log("10 To 40"):a3 > 40?console.log("> 40"):  console.log("Unknown");

// Write Previous Condition With Ternary If Syntax

let st = "Elzero Web School";

// W Position May Change
if (st.includes("W")) {
  console.log("Good");
}

if (st.length!== "string") {
  console.log("Good");
}

if ("????" === "number") {
  console.log("Good");
}

if (st.substring(0,6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}
console.log(st.substring(0,6).repeat(2))

//switch challenge


console.log("%c switch challenge","color:red;font-size:bold");
let job =  "IT";
let salary = 0;

// // if (job === "Manager") {
//   salary = 8000;
// } else if (job === "IT" || job === "Support") {
//   salary = 6000;
// } else if (job === "Developer" || job === "Designer") {
//   salary = 7000;
// } else {
//   salary = 4000;
// }

 switch(job){
    case "Manager":
    salary=8000;
    console.log(salary);
    break
    case "IT":
    case "Support":
    salary=6000;
    console.log(salary);
    break
    case "Developer":
    case "Designer":
    salary=7000;
    console.log(salary) 
    break
    default:
    salary=4000;
    console.log(salary);

}
/*
  If Challenge
*/

let holidays = 0;
let money = 0;

// switch (holidays) {
//   case 0:
//     money = 5000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 1:
//   case 2:
//     money = 3000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 3:
//     money = 2000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 4:
//     money = 1000;
//     console.log(`My Money is ${money}`);
//     break;
//   case 5:
//     money = 0;
//     console.log(`My Money is ${money}`);
//     break;
//   default:
//     money = 0;
//     console.log(`My Money is ${money}`);
// }
if (holidays===0) {
    money = 5000;
    console.log(`My Money is ${money}`);
    } else if (holidays===1||holidays===2) {
        money = 3000;
        console.log(`My Money is ${money}`);
    } else if (holidays===3) {
        money = 2000;
        console.log(`My Money is ${money}`);
    } 
    else if (holidays===4) {
        money = 1000;
        console.log(`My Money is ${money}`);
  } 
  else if (holidays===5) {
    money = 0;
    console.log(`My Money is ${money}`);
} 
    else {
        money = 0;
        console.log(`My Money is ${money}`);
    }

    //arrays challenge
 console.log("%c array challenge","color:red;font-size:bold");

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
console.log((my.slice(zero,my.indexOf("Gamal"))).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];
myy=(my.slice(zero,my.indexOf("Gamal"))).reverse();
console.log((myy.slice(1,3))); // ["Elham", "Mazero"]
myy=((myy.slice(1,3)).slice(1)).join()
myy=myy.substring(2)

console.log(myy); // "Elzero Mazero"

// console.log(); // "rO"

console.log("%c functions challenge","color:red;font-size:bold");

function checkStatus(a, b, c) {
  let type=[a,b,c];
  let str,nmb,bool;
  let i;
  for(i=0;i<type.length;i++){
    if(typeof type[i]==='string'){
      str=type[i]
    }
    else if(typeof type[i]==='number'){
      nbm=type[i]
    }
    else if(typeof type[i]=='boolean'){
      bool=type[i]
    }
    else{
      console.error('invalid data')
    }
  }
    if (bool === true){
      console.log(`Hello ${str} , your age is ${nbm}, your are availabel for hire`)
    }
    else{
      console.log(`Hello ${str} , your age is ${nbm}, your are not availabel for hire`)
  }}


// function checkStatus(a, b, c) {
//   if (typeof a === 'string' && typeof b === 'number' && typeof c === 'boolean') {
//     if (c === true) {
//       console.log(`Hello ${a}, your age is ${b}, you are available for hire.`);
//     } else {
//       console.log(`Hello ${a}, your age is ${b}, you are not available for hire.`);
//     }
//   } else {
//     console.log('Invalid input types. Please provide a string, a number, and a boolean value.');
//   }
// }


// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"