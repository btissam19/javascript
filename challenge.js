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