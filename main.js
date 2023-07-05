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




