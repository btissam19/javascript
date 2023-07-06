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

/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);//11 + 20 +80 -12 =99
console.log(++a + -b + +c++ - -a++ + +a);// 13 -20 +81 - -13 -14 =73
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
  [++a] []
  [++a]
  - Value:11
  - Explain:
  [+]
  - Explain:
*/

/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d*(+e)); // 2000
console.log(-d + +e +f + 23*g); // 173