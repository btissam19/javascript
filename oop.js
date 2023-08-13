// ########################### assiegment 1 ####################
  class car{
    constructor(name, model, price){
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run(){
        console.log("Car Is Running Now")
    }
    stop(){
        console.log("Car Is stopping  Now")
    }
}
let carone=new car("MG",2022,4200000)
let carTow=new car("W",2023,6200000)
let carThree=new car("Dacia",2020,300000)
console.log(`Car One Name Is ${carone.n} And Model ${carone.m} And Price Is ${carone.p}`)
carone.run()
carone.stop()
console.log(`Car One Name Is ${carTow.n} And Model ${carTow.m} And Price Is ${carTow.p}`)
console.log("#".repeat(100))
// ########################### assiegment 2 ####################
class Phone {
    constructor(name, serial, price) {
      this.name = name;
      this.serial = serial;
      this.price = price;
    }
  }
  class Tablet extends Phone{
    constructor(name, serial, price,size="Unknown"){
        super(name, serial, price)
        this.s=size
    }
    fullDetails(){
        return `${this.name} Serial is ${this.serial} And Size Is ${this.s}`
    }
}
  
  // Write Tablet Class Here
  
  let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
  let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
  let TabletThree = new Tablet("LG", 250450650, 650);
  
  console.log(`${TabletOne.fullDetails()}`);
  // iPad Serial is 100200300 And Size Is 12.9
  
  console.log(`${TabletTwo.fullDetails()}`);
  // Nokia Serial is 350450650 And Size Is 10.5
  
  console.log(`${TabletThree.fullDetails()}`);
  // LG Serial is 250450650 And Size Is Unknown
console.log("#".repeat(100))
// ########################### assiegment 3 ####################
let myStr = "Elzero";
String.prototype.addLove= function() {return `I Love ${this} Web School`} // like tHis we add a function to a prototype
console.log(myStr.addLove());
console.log("#".repeat(100))
// ########################### assiegment 5 ####################
const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
  };
  
  Object.defineProperties(myObj,{
    score:{
        writable:false,
        enumerable:true,
        configurable:true
    },
    id:{
        enumerable:false,
        writable:true,
        configurable:true
    },
    country:{
        configurable:true,
        enumerable:false
    }
})
 delete myObj.country
  
  myObj.score = 500;
  
  for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
  }

console.log(myObj);
console.log("#".repeat(100))
// ########################### assiegment 4 ####################
// Edit The Class
class User {
    #c;
    constructor(username, card) {
      this.u = username;
      this.#c = card;
    }
    creditCard(){
        return  this.#c.toString().match(/\d{4}/g).join("-");
    }
   get showData(){
        return ` Hello ${this.u} Your Credit Card Number Is ${this.creditCard()}`
    }
  }
  
  // Do Not Edit Anything Below
  
  let userOne = new User("Osama", "1234-5678-1234-5678");
  let userTwo = new User("Ahmed", "1234567812345678");
  let userThree = new User("Ghareeb", 1234567812345678);
  
  console.log(userOne.showData);
  // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userTwo.showData);
  // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userThree.showData);
  // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678
  
  console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined