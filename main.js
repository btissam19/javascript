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


//assiegment for string 
console.log("%cchallenge 3","color:red")
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.slice(-6,-5).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.substring(userName.length-6,userName.length-5).toLowerCase().repeat(3)); // eee



let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toLocaleUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True



// if else assiegment
let num3 = 110; // "110"

if(num3<10){
    console.log(`00${num3}`);
}
else if(num3>10 && num3<100){
    console.log(`0${num3}`);
}
else {
    console.log(num3);
}

let num4 = 9;
let str = "9";
let str2 = "20";
 if(num4==str){
    console.log(`${num4} Is The Same Value As ${str}`)
}
if ( num4=str && typeof num4!=typeof str){
    console.log(`${num4} Is The Same Value As ${str} But Not The Same Type`)
}
 if(num4!==str2){
    console.log(`${num4} Is Not The Same Value Or The Same Type As ${str2}`)
}
if(str!=str2 && typeof str == typeof str2){
    console.log(`${str} Is The Same Type As ${str2} But Not The Same Value`)
}


//switch assiegment

// let day = "   friday  ";
// // You Need To Remove Spaces And Make First Letter Capital => Friday

// let da = "Friday";
// let days = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// Output => "Its Not A Valid Day"
console.log("switch assiegment")
let day = "   friday  ";
day = day.trim().charAt(0).toUpperCase()+day.trim().substring(1);
console.log(day)
switch(day){
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available")
  break
  case "Monday":
  case "Thursday":
  console.log("From 10:00 AM To 5:00 PM")
  break
  case "Tuesday":
  console.log( "From 10:00 AM To 6:00 PM")
  break
  case "Wednesday":
  console.log("From 10:00 AM To 7:00 PM")
  break
  case "World":
  console.log("Its Not A Valid Day")
  break
  default :
  console.log("an knowns day")
}


// arrays assiegment

console.log("%carray","color:red")
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let numm = 3;

// Method 1
console.log(myFriends.slice(undefined,numm)) // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(undefined,myFriends.length -1,undefined)); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends=friends.splice(friends.indexOf("Ahmed"),friends.length-1,undefined)
friends=friends.splice(friends.indexOf("Eman"),friends.indexOf("Osama"),undefined)


console.log(friends); // ["Eman", "Osama"]


let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr=(arrTwo.slice(arrTwo.indexOf("Z"))).concat(arrOne.reverse(),(arrTwo.slice(undefined,arrTwo.indexOf("Z")).reverse()));
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(((words.splice(words.length-1)[0][0]).substring(2)).toUpperCase()); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
if (haystack.includes(needle )){
    console.log("found");
}
if(haystack.indexOf(needle)){
    console.log("found");
}
if(haystack.join("").includes(needle)){
    console.log("found");
}

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs=(arr2.slice(arr2.indexOf("F"),arr2.length-1)).concat(arr1.slice(arr1.indexOf("X")),arr2.slice(arr2.indexOf("Y")));
allArrs=(allArrs.join("")).toLowerCase()
console.log(allArrs); // fxy

//functions assiegment

function sayHello(theName, theGender) {
    if(theGender==="Male"){
        console.log(`hello Mr ${theName}`);
    }
    else if(theGender==="Female"){
        console.log(`hello Mrs ${theName}`)
    }
    else {
        console.log(`hello ${theName}`)
    }
    
  }
  
  // Needed Output
  sayHello("Osama", "Male"); // "Hello Mr Osama"
  sayHello("Eman", "Female"); // "Hello Miss Eman"
  sayHello("Sameh"); // "Hello Sameh"



  function calculate(firstNum, secondNum, operation) {
    if( secondNum===undefined){
        console.log(`we can't do the operation because you have just one number`)
    }
    else{
    if (operation==='add'){
        console.log(firstNum + secondNum)
    }
    else if(operation==='subtract'){
        console.log(firstNum - secondNum)
    }
    else if(operation==='multiply'){
        console.log(firstNum*secondNum)
    }
    else{
        console.log(firstNum + secondNum)
    }}
  }
  
  // Needed Output
  calculate(20); // Second Number Not Found
  calculate(20, 30); // 50
  calculate(20, 30, 'add'); // 50
  calculate(20, 30, 'subtract'); // -10
  calculate(20, 30, 'multiply'); // 600



  function ageInTime(theAge) {
    if (theAge>100|| theAge<10){
        console.log('Age Out Of Range')
    }
    else{
        console.log(`your age in mouth is :${theAge *12}
your age in weeks is ${theAge*12*4}
your age in days is ${theAge*365}
your age in hours is ${theAge*365*24}
your age in minute is ${theAge*365*24*60}
your age in secondes is ${theAge*365*24*60*60}`)
    }
  }
  
  // Needed Output
  ageInTime(110); // Age Out Of Range
  ageInTime(38); // Months Example => 456 Months


  function createSelectBox(startYear, endYear) {
    for (let i = startYear; i <= endYear; i++) {
        document.write(`<select><option value="${i}">${i}</option></select>`);
      }
      
  }
  createSelectBox(2000, 2021);
 function multiply(...number){
    let multi=1
    for(let i=0;i<number.length;i++){
        if(typeof number[i]==='string'){
        continue}
        else{
        //    number[i]=Math.trunc(number[i])
       number[i] =parseInt(number[i])
        }
     multi*=number[i]
    }  
    console.log(multi) 
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000