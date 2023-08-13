//############################## Assiegment 1##########################################
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let reIp=/(\d{4}:\w*\d{4})*/
console.log(ip.match(reIp))
console.log("#".repeat(90))
//############################## Assiegment 2##########################################
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let reSpecialNames=/\bos\d*o/gi
console.log(specialNames.match(reSpecialNames))
console.log("#".repeat(90))
//############################## Assiegment 3##########################################
let phone = "+(995)-123 (4567)";
let rePhone=/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/
let REphone=/(\d+|\D+)+/
console.log(phone.match(rePhone))
console.log(phone.match(REphone))
console.log("#".repeat(90))
//############################## Assiegment 4##########################################
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
//https?:its means that we can write s and we can not write
//h
console.log("comment things")
console.log("#".repeat(90))
//############################## Assiegment 5##########################################
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

let re = /\d{2}(\/|\s-\s|\s)\d{2}(\/|\s-\s|\s)\d{2,4}/

console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"
console.log("#".repeat(90))
//############################## Assiegment 6##########################################

let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let rE = /^(https?:\/\/)?(www\.)?elzero\.org(:8080\/articles\.php\?id=100&cat=topics)?$/i;


console.log(url1.match(rE));
console.log(url2.match(rE));
console.log(url3.match(rE));
console.log(url4.match(rE));
console.log(url5.match(rE));

console.log("#".repeat(90))

