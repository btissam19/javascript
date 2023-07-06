//assiegment from 1 to 9 videos


//things in separate line
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color="blue";
document.querySelector("h1").style.fontSize="80px";
document.querySelector("h1").style.fontWeight="bold";
document.querySelector("h1").style.textAlign="center";
document.querySelector("h1").style.fontFamily="Arial";
//things in one  line using cssText variable
document.write("<h2>Bassoma</h2>");
document.querySelector("h2").style.cssText = "color: red; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial;";
//write in t console with diffrence colors 
console.log("%cElzero %cWeb %cSchool", "color: red;font-size:40px", "color:green;font-size:40px;font-weight:bold", "color:white;font-size:40px;background-color:blue");
//write table in console
console.table(["bassoma","habhoba","amon","hamod"]);
//write groupe things in console
console.group("Group 1");
console.log("btisaam");
console.log("amine");
console.log("abdo");
console.group("child groupe 1");
console.log("btisaam");
console.log("amine");
console.log("abdo");
console.groupEnd();
console.group("child groupe 2");
console.log("btisaam");
console.log("amine");
console.log("abdo");
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("btisaam");
console.log("amine");
console.log("abdo");
console.groupEnd();
//assiement from 10 TO 17 videos

let numberOne=10 , numberTow=20;
//for traditional methode we add ""
console.log(numberOne+""+ numberTow);
console.log( typeof (numberOne+""+ numberTow));
//but for new methode we just write variable next to next
console.log(`${numberOne}${numberTow}`);
//for traditional way we write \n
console.log(numberOne+"\n"+ numberTow);
//for t new way we just click enter
console.log(`${numberOne}
${numberTow}`);
// elzoro is the id of an html element and its t type of an object
console.log(elzero.innerHTML);
//we get type of object because in JS perator treats DOM elements (such as HTML elements) as objects 
console.log(typeof elzero); 
console.log("\`I\'m In \n \\\\ \nLove \\\\ \"\"\" \'\'\'\n+++ With ++ \n\\\"\"\"\\\"\"\" \n\"\"Jvascript\"\"\`\`");
let a=21 ,b=20;
console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);
// assiegment from 17 to 22

console.log(10 - 20 + 15 * 3 / 190 % 10 - 400); // 0


console.log(10 * 20 - 15 + 3 / 190 * 10 - 400); // 0


let num = 3;

// Solution One
console.log(num+num); // 6

// Solution Two
console.log(++num + true + true); // 6

// Soultion Three
console.log(--num + --num + true); // 6

// Soultion Four
console.log(++num + ++num - true); // 6

// Solution Five
console.log(num + num - true -true); // 6

// Solution Six
console.log(--num + true + true + true); // 6

let num1 = "10";

// Solution One
console.log(+num1 + +num1); // 20

// Solution Two
console.log(-(-num1) -  -num1); // 20

// Solution Three
console.log(+num1 - -num1); // 20

// Solution Four
console.log(num1 - -num1); // 20

let points = 10;

// Write Your Code Here

console.log(points + true +true +true); // 13

// Write Your Code Here

console.log(points -true -true); // 8;

//assiegment in numbers 

console.log(100_000); 
console.log(100000); 
console.log(5e4 + 5e4); 
console.log(parseInt("100000")); 
console.log(parseFloat("100000.OOO")); 
console.log(Math.round(99999.9)); 
console.log(Math.trunc(100000.12)); 
console.log(Math.ceil(99999.9)); 
console.log(Math.floor(100000.5)); 
console.log(Math.pow(10,5)); 
console.log(Math.max(99,100000,888,55)); 
console.log(Math.min(99999999,100000)); 
console.log(10000*10); 
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER - 9007199254740975); 

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); 
console.log(parseFloat(parseFloat(myVar).toFixed(2))); 

let num2 = 10;

console.log(Number.isInteger(num2) ? num2- 2*true : 2);

let flt = 10.4;

console.log(Math.round(flt)); 
console.log(Math.floor(flt)); 
console.log(Math.trunc(flt)); 
console.log(parseInt(flt)); 
console.log(parseFloat(flt.toFixed(0))); 

console.log(Math.floor(Math.random() *5)); 
