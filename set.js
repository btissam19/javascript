//##################### set assiegment 1 ####################
// Set(3) {10, 20, 2}
let setOfNumbers= new Set([10]);//we passe argument trough t Set(directly)
setOfNumbers.add(20).add(setOfNumbers.size);//WE add things using add
console.log(setOfNumbers)
console.log(Array.from(setOfNumbers)[2])
console.log("#".repeat(100))
//##################### set assiegment 2 ####################
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log([... new Set(myFriends)].sort())
console.log("#".repeat(100))
//##################### set assiegment 3 ####################
let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
  };
//we can reduce all this using object.enties
// let infoKeys=Object.keys(myInfo)
// let infoValue=Object.values(myInfo)
// let myMap=new Map();
// for(let i=0;i<infoKeys.length;i++){
//   myMap.set(infoKeys[i],infoValue[i])
// }
let myMap=new Map(Object.entries(myInfo));
console.log(myMap)
console.log(myMap.size)
console.log(myMap.has('role'))
console.log("#".repeat(100))

//##################### set assiegment 4 ####################

let theNumber = 100020003000;
let settringnum = Number(Array.from(new Set([...theNumber.toString()])).filter(char=>char!=='0').join(''))
console.log(settringnum)
console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(''))
console.log("#".repeat(100))
//##################### set assiegment 5 ####################
let theName = "Elzero";
let arrayS1=[...theName]
let arrayS2=Array.from(theName)
let arrayS3=theName.split("")
let arrayS4=[].concat(...theName)
let arrayS5=Object.assign([],theName)
let arrayS6=[...new Set(theName)]

console.log(arrayS1)
console.log(arrayS2)
console.log(arrayS3)
console.log(arrayS4)
console.log(arrayS5)
console.log(arrayS6)
console.log("#".repeat(100))
//##################### set assiegment 7 ####################

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];
let numcolect1=[...numsOne ,...numsTwo]
let numcolect2=numsOne.concat(numsTwo)
let numcolect3=numsOne.push(...numsTwo)
console.log(numcolect1)
console.log(numcolect2)
console.log(numsOne)
console.log("#".repeat(100))
//##################### set assiegment 8 ####################
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log(Math.max(...n2)*[...n1,...n2].length)
console.log("#".repeat(100))
//##################### set assiegment 7 ####################
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let sortArray=chars.sort()
// console.log(sortArray.copyWithin(0,3,6))
// let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
// console.log((chars.sort()).copyWithin(0,4,8))

// Needed Output
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']

let resutl7=(chars.sort()).copyWithin()