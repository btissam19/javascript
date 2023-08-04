// // ############################# Assiegment I #######################################
// let myNumbers = [1, 2, 3, 4, 5];

// let [x, , , , ]=myNumbers;//so for dustricting element fom an array we just replace the value we want to destruct by a new variable name

// let [, , , , y]=myNumbers;//we  make a new array wre all the elemnt are the same and only we take e and assiegn it 5

// console.log(x*y); // 5
// // ############################# Assiegment II #######################################

// let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// let [l, b, m, [d, e, [f, g]]]=mySkills;///this The best way to destructing array easly even with nested array

// console.log(`My Skills: ${l}, ${b}, ${m}, ${d}, ${e}, ${f}, ${g}`);

// // ############################# Assiegment III #######################################
// const member = {
//     age: 30,
//     working: false,
//     country: "Egypt",
//     hobbies: ["Reading", "Swimming", "Programming"],
//   };
  
// let {age:a,working:w,country:c,hobbies:[h1,,h3]}=member;/// we take destructing of an object and we rename its  metdes and members
  
//   console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`); 
//   console.log(`I Live in ${c}`);
//   console.log(`My Hobbies: ${h1} And ${h3}`);
//   // ############################# Assiegment IIII #######################################

//   let arr1 = ["Ahmed", "Sameh", "Sayed"];
//   let arr2 = ["Mohamed", "Gamal", "Amir"];
//   let arr3 = ["Haytham", "Shady", "Mahmoud"];
//   const myfiends={
//     fiendOne:arr1,
//     fiendTow:arr2,
//     friendTree:arr3
// }
// let {fiendOne:[p,,],fiendTow,friendTree:[,n,u]}=myfiends
//  console.log(`My Best Friends: ${n}, ${u}, ${p}`);

//    // ############################# Assiegment IIIII #######################################
//    const game = {
//     title: "YS",
//     developer: "Falcom",
//     releases: {
//       "Oath In Felghana": ["USA", "Japan"],
//       "Ark Of Napishtim": {
//         US: "20 USD",
//         JAP: "10 USD",
//       },
//       Origin: "30 USD",
//     },
//   };
  
//   let {title:t,developer:o,releases,Origin:or}=game;
//   let releaseskey=Object.keys(releases)
//   let my=releases[releaseskey[0]]
//   let s=releases[releaseskey[1]]
//   let {US: u_price, JAP: j_price} = releaseskey[1];
// let [r,j]=releaseskey[0]
  
  
//   console.log(`My Favourite Games Style Is ${t} Style`);
//   // My Favourite Games Style Is YS Style
  
//   console.log(`And I Love ${o} Games`);
//   // And I Love Falcom Games
  
//   console.log(`My Best Release Is ${my} It Released in ${r} & ${j}`);
//   // My Best Release Is Oath In Felghana It Released in USA & Japan
  
//   console.log(`Although I Love ${s}`);
//   // Although I Love Ark Of Napishtim
  
//   console.log(`${s} Price in USA Is ${u_price}`);
//   // Ark Of Napishtim Price in USA Is 20 USD
  
//   console.log(`${a} Price in Japan Is ${j_price}`);
//   // Ark Of Napishtim Price in Japan Is 10 USD
  
//   console.log(`Origin Price Is ${or}`);
  // Origin Price Is 30 USD
// ############################# Assiegment IIIIII #######################################
  let chosen =2;

let myFriendss = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here

let [array1,array2,array3]=myFriendss
if(chosen===1){
    let {title:name,age,available:a,skills:[,s2]}=array1
    console.log(`
${name}
${age}
${a ? "Available" : ""}
${s2}`)
}
if(chosen===2){
    let {title:name,age,available:a,skills:[,s2]}=array2
    console.log(`
${name}
${age}
${a ? "" : "Not Available"}
${s2}`)
}
if(chosen===2){
    let {title:name,age,available:a,skills:[,s2]}=array3
    console.log(`
${name}
${age}
${a ? "Available" : ""}
${s2}`)
}



// "Ahmed"
// 25
// "Not Available"
// "Django"

// // If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"