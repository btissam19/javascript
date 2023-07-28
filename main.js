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

console.log("%cfunction scope assiegment", "color: red;font-size:40px")
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
       let name = zName.split(" ");
       let fullname = name[1].slice(0, 1);
       return `${name[0]} ${fullname}`;
    }
    function ageWithMessage(zAge) {
      let age=zAge.slice(0,2);
      return `Your age is ${age}`;
    }
    function countryTwoLetters(zCountry) {
      let country = zCountry.slice(0, 2).toUpperCase();
      return `You live in ${country}`;
    }
    function fullDetails() {
        return `Hello, ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
    }
    return fullDetails(); // Do Not Edit This
}

  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  // Hello Osama M., Your Age Is 38, You Live In EG
  
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
  // Hello Ahmed A., Your Age Is 32, You Live In SY


//   function itsMe() {
//     return `Iam A Normal Function`;
//   }
   
 let  itsMe = function() { return`Iam A Normal Function`}
  console.log(itsMe()); // Iam A Normal Function

  function urlCreate(protocol, web, tld ) {

    return `${protocol}://www.${web}.${tld}`;
  }


  let unrlCreate= function(protocol, web, tld ){return `${protocol}://www.${web}.${tld}`;}
  
  console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

  function specialMix(...data) {
    let result=0;
    for(let i=0; i< data.length;i++){
        if(typeof data[i]==='number'){
          result+=data[i] }
        else if(typeof data[i]==='string'){
            let number=parseInt(data[i])
            if(!isNaN(number)){
            result+=number
            
            }
        }
    }
    if(result===0){ return "all is a string"}
    else{return result}
  }

  console.log(specialMix(10, 20, 30)); // 60
  console.log(specialMix("10Test", "Testing", "20Cool")); // 30
  console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
  console.log(specialMix("Test", "Cool", "Test")); // All Is Strings


  console.log("%c heig order function ", "color: red;font-size:40px")
  let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
 let btissam=mix.map(function(elt){
    if (typeof elt==='string'){
        return elt
    }
    else {
        return ""
    }
}).reduce(function(acc,elt){
      return `${acc}${elt}`

})
console.log(btissam);
// Elzero

let myString = "EElllzzzzzzzeroo";

let stringtow=myString.split("").filter(function(elt,index,arr){
    if(arr[index]!==arr[index+1]){
        return elt
    }
}).reduce(function(acc,elt){
    return `${acc}${elt}`
})
console.log(stringtow)

let myArray = ["E", "l", "z", ["e", "r"], "o"];
let myarraytow=myArray.reduce(function(acc,elt){
    return `${acc}${elt}`
}).split("").filter(function(elt){
    if(elt!==","){
        return elt;
    }
}).reduce(function(acc,elt){
    return `${acc}${elt}`
})
console.log(myarraytow)

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let justnumbers=numsAndStrings.filter(function(elt){
    return typeof elt=== "number"
}).map(function(elt){
    return -elt
})
console.log(justnumbers)


let nums = [2, 12, 11, 5, 10, 1, 99];
let numsNew=nums.reduce(function(acc,elt){
    if(elt%2===0){
        return acc*elt
    }
    else{
        return acc+elt
    }
},1)
console.log(numsNew)
// 500
// [-1, -10, 10, 20, -5, -3]

let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});

console.log(evenNumbers);


let addMap = numbers.map(function (el) {
  return el + el;
});

console.log(addMap);

let addFilter = numbers.filter(function (el) {
  return el + el;
});

console.log(addFilter);


console.log(" %coriented programming in js","color:red")

// Create Your Object Here
let thename="ibtissam",theage=20,thecountry="moroco";
let member={
    thename:"ibtissam",
    theage:20,
    thecountry:"moroco",
    thefullDetails: function(){
        console.log(`MY name is ${thename}MY age is${theage}I live in ${thecountry}`)
    }

}
console.log(member.thename); // Elzero
console.log(member.theage); // 38
console.log(member. thecountry); // Egypt
console.log(member.thefullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt



// Create Your Object Here

let objMethodOne={
    property:"Method one"
}
console.log(objMethodOne.property); // "Method One"

// Method Two
// Create Your Object Here
let objMethodTwo= new Object({ property:"Method tow"})
console.log(objMethodTwo.property); // "Method Two"

// Method Three
// Create Your Object Here
objMethodThree=Object.create({property:"Method Three"})
console.log(objMethodThree.property); // "Method Three"

// Method Four

let objMethodtest= {property:"Method four"}
objMethodFour=Object.assign(objMethodtest)
console.log(objMethodFour.property); // "Method Four"


let aa= 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

// Create Your Object Here in One Line
finalObject=Object.assign({aa},threeNums,twoNums)
console.log(finalObject);

/*
  a: 1
  b: 2
  c: 3
  d: 4
  e: 5
  f: 6
*/
// The Object To Work With
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

// Code One => How To Get Object Length ?
let objectLength = Object.keys(myFavGames).length;
console.log(objectLength);

for (let i = 0; i < objectLength; i++) {
  let gameName = Object.keys(myFavGames)[i];//its became a like a liste of newted object otrwise if we want to make t object like an array and applicat all array functionality we use tobject.key function
  console.log(`The Game Name Is ${gameName}`);
  console.log(`The Publisher Is ${myFavGames[gameName].publisher}`);
  console.log(`The Price Is ${myFavGames[gameName].price}`);
  
  // Check If Nested Object Has Property (bestThree)
  if ("bestThree" in myFavGames[gameName]) {
    console.log("- Game Has Releases");
    console.log(`First => ${myFavGames[gameName].bestThree.one}`);
    console.log(`Second => ${myFavGames[gameName].bestThree.two}`);
    console.log(`Third => ${myFavGames[gameName].bestThree.three}`);
  }
  console.log("#".repeat(20));
}




// let myElement = document.querySelector(".js");

// console.log(myElement.innerHTML);
// console.log(myElement.textContent);

// myElement.innerHTML = "Text From <b>Main.js</b> File";
// myElement.textContent = "Text From <span>Main.js</span> File";

// document.images[0].src = "https://google.com";
// document.images[0].alt = "Alternate";
// // document.images[0].title = "Picture";
// // document.images[0].id = "pic";
// // document.images[0].className = "img";

// let myLink = document.querySelector(".link");

// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));

// myLink.setAttribute("href", "https://twitter.com");
// myLink.setAttribute("id", "pic");
// myLink.setAttribute("title", "Twitter");
// myLink.setAttribute("className", "img");
// console.log(myLink.getAttribute("class"));
// console.log(myLink.getAttribute("href"));
// console.log(myLink.getAttribute("id"));
// console.log(myLink.getAttribute("title"));




let myElement = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");

myElement.className = "product";
myElement.setAttributeNode(myAttr);
myElement.setAttribute("data-test", "Testing");

// Append Comment To Element
myElement.appendChild(myComment);

// Append Text To Element
myElement.appendChild(myText);

// Append Element To Body
document.body.appendChild(myElement);