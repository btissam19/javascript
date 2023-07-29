// console.log("%cASSIEGMENT 1","color:red")
// //in queryseloctor we select just the firest element we found 
// let one = document.querySelector("#elzero");//id never repeatit 
// let two = document.querySelector(".element");//classe can repeteate but we take just the first one
// let three = document.querySelector("[name = 'js']");//if we want to select things based on attribute we use tis syntaxe
// let four = document.querySelector("div");
// // in quertselectorAll we  ve to add t index because its selecte the all collection whihave this property 
// let five = document.querySelectorAll("#elzero")[0];
// let six = document.querySelectorAll(".element")[0];
// let seven = document.querySelectorAll("[name = 'js']")[0];
// let eight = document.querySelectorAll("div")[0];
// // getelement methode also we have to specific things just in getElementById we don't because the id is unique
// let nine = document.getElementById("elzero");
// let ten = document.getElementsByClassName("element")[0];
// let eleven = document.getElementsByTagName("div")[0];
// let twelve = document.getElementsByName("js")[0];
// let thirteen = document.body.firstElementChild;// this is for take the first children in the body
// let fourteen = document.body.children[0];// this give us all body childreen but if we want some wone specific we add the  index 
// let fifteen = document.body.childNodes[1];//the same things just her its take all things even the wihet space

// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);
// console.log(five);
// console.log(six);
// console.log(seven);
// console.log(eight);
// console.log(nine);
// console.log(ten);
// console.log(eleven);
// console.log(twelve);
// console.log(thirteen);
// console.log(fourteen);
// console.log(fifteen);
// console.log("%cASSIEGMENT 2","color:red")


// //this by images and chnges arributes directly
// // let newlogo=document.images;//its give us an array of images and we can add any attribut the imge
// // for(let j=0;j<newlogo.length;j++){
// //     newlogo[j].src="https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
// //     newlogo[j].alt="Elzero Logo"
// //     newlogo[j].style = "background-color: blue; margin-bottom: 30px; padding: 30px";
// // }

// //and this is using the seAttribute method and quertselectoreall(img)
// // let images = document.querySelectorAll('img');
// // for(let i = 0; i < images.length; i++){
// //     images[i].setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
// //     images[i].setAttribute("alt", "Elzero Logo");
// //     console.log(`${images}`);
// // }
// // console.log("%cASSIEGMENT 3","color:red")
// // let input=document.forms[0][0]///for get the input field from The form
// // let result=document.getElementsByClassName("result")[0]//// for get the div element from the forms
// // input.oninput= function(){//oninput event
// //     result.innerHTML=`{${input.value}} USD Dollar = {${((input.value)*15.6).toFixed(2)}} Egyptian Pound`//input tage name has the value attribut in where we have the value of users enter
// // }

// console.log("%cASSIEGMENT 4","color:red")

// let divOne=document.querySelector(".one");
// let divTow=document.querySelector(".two");
// divOne.title=divOne.className
// divOne.textContent=divOne.className
// divTow.title=divTow.className
// divTow.textContent=`${divTow.className} ${divTow.attributes.length}`
// console.log(divOne)
// console.log(divTow)

// //so in one element we have the attributes the length textcontent ......
// console.log("%cASSIEGMENT 5","color:red")
// let setAttr=document.images
// for(let i=0;i<setAttr.length;i++){
//     if(setAttr[i].hasAttribute("alt")){
//         setAttr[i].alt="old"
//     }
//     else{
//         setAttr[i].alt="Elzero New"
//     }
// }
// console.log(setAttr)


// console.log("%cASSIEGMENT 1 from part tow of DOM","color:red")
// // let links=document.links
// // for(let i=0 ;i<links.length;i++){
// //     if(links[i].classList.contains("open")&& (links[i].textContent="Elzero")){
// //         window.onload = function(){
// //             links[i].click()
// //         }
// //     }
// // }

console.log("%cASSIEGMENT 3 from part tow of DOM","color:red")
let p=document.querySelector('p')
let div=document.querySelector(".our-element")
myp.remove()
let stardiv=div.cloneNode()
let enddiv=div.cloneNode()
function attrb(element,inde){
    element.textContent=inde
    element.className=inde
    element.title=inde
    element.setAttribute("data-value",inde)

}
stardiv=attrb(stardiv,"start")
enddiv=attrb(enddiv,"end")
mydiv.before(stardiv)
mydiv.after(enddiv)
console.log(startdiv)
console.log(enddiv)


console.log("%cASSIEGMENT 4 from part tow of DOM","color:red")
let elzero=document.body.lastChild.nodeValue.trim()
console.log(elzero);
console.log("%cASSIEGMENT 5 from part tow of DOM","color:red");
[...document.body.children].forEach(
    el => (el.onclick = _ => console.log(`This is ${el.localName}`))//localName for take the html tag name
);
    