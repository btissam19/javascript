// ########################### assiegment 1 ####################
console.log("#".repeat(100));
let birthDay=new Date("12-19-2001");
let today=new Date()
let age= today-birthDay
console.log(` my age is ${age/1000} seconds`)
console.log(` my age is ${age/1000/60} minutes`)
console.log(` my age is ${age/1000/60/60} Hours`)
console.log(` my age is ${age/1000/60/60/24} DAYS`)
console.log(` my age is ${age/1000/60/60/24/30} MONTh`)
console.log(` my age is ${age/1000/60/60/24/30/12} YERAS`)
// ########################### assiegment 2 ####################
console.log("#".repeat(100));
let date=new Date("1-1-1970")
console.log(new Date(date.setMonth(120)));
// ########################### assiegment 3 ####################
console.log("#".repeat(100));

let date1=new Date()
let lastday=date1.setDate(0)
console.log(new Date(lastday));


// ########################### assiegment 3 ####################
console.log("#".repeat(100));
function* gen(){
    let current = 14;
    let difference = 140;

    while(true) {
        yield current;
        current += difference;
        difference += 200;
    }
}
let generator = gen();
console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
// ########################### assiegment 3 ####################
console.log("#".repeat(100));
function* genNumbers() {
    yield* [1, 2, 2, 2, 3, 4, 5];
  }
  function* genLetters() {
    yield* ["A", "B", "B", "B", "C", "D"];
  }
  
  function*genAll(){
    yield* new Set(genNumbers())
    yield* new Set(genLetters())
}
  
  let generator2 = genAll();
  
  console.log(generator2.next()); // {value: 1, done: false}
  console.log(generator2.next()); // {value: 2, done: false}
  console.log(generator2.next()); // {value: 3, done: false}
  console.log(generator2.next()); // {value: 4, done: false}
  console.log(generator2.next()); // {value: 5, done: false}
  console.log(generator2.next()); // {value: "A", done: false}
  console.log(generator2.next()); // {value: "B", done: false}
  console.log(generator2.next()); // {value: "C", done: false}
  console.log(generator2.next()); // {value: "D", done: false}

  let dateTwo = new Date();
dateTwo.setTime(0);
dateTwo.setFullYear(1980);
dateTwo.setHours(0);
dateTwo.setSeconds(1);

console.log(dateTwo);

console.log("=".repeat(55));
"========================================================================================"
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let dateThree = new Date();

dateThree.setDate(0);

console.log(dateThree);
console.log(`"Previous Month Is ${months[dateThree.getMonth()]} And Last Day Is ${dateThree.getDate()}"`);

console.log("=".repeat(55));
"========================================================================================"

let birthOne = new Date("1991 01 28");
console.log(birthOne);
let birthTwo = new Date("01/28/1991");
console.log(birthTwo);
let birthThree = new Date("01-28-1991");
console.log(birthThree);

console.log("=".repeat(55));