//things in separate line
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color="blue";
document.querySelector("h1").style.fontSize="80px";
document.querySelector("h1").style.fontWeight="bold";
document.querySelector("h1").style.textAlign="center";
document.querySelector("h1").style.fontFamily="Arial";
//things in one  line
document.write("<h2>Bassoma</h2>");
document.querySelector("h2").style.cssText = "color: red; font-size: 80px; font-weight: bold; text-align: center; font-family: Arial;";
//write in t console with diffrence colors 
console.log("%cElzero %cWeb %cSchool", "color: red;font-size:40px", "color:green;font-size:40px;font-weight:bold", "color:white;font-size:40px;background-color:blue");
console.table(["bassoma","habhoba","amon","hamod"]);
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


