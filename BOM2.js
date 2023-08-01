// //create the 3 selcet
// document.body.style.display = 'flex';
// document.body.style.justifyContent = 'center';
// document.body.style.alignItems = 'center';
// document.body.style.height = '100vh';
// document.body.style.background = '#f5f5f5';

// let properties = ['fontType', 'color', 'fontWeight'];
// let els = {};

// properties.forEach(property => {
//     let el = document.createElement("select");
//     el.className = property;
//     el.style.width = '200px';
//     el.style.height = '40px';
//     el.style.margin = '10px';
//     el.style.borderRadius = '5px';
//     el.style.padding = '10px';
//     el.style.outline = 'none';
//     el.style.fontSize = '16px';
//     el.style.border = 'none';
//     el.style.boxShadow = '0px 1px 5px rgba(0,0,0,0.1)';
//     document.body.appendChild(el);
//     els[property] = el;
// });

// let fontTypes = ["Open Sans", "Sans", "Roboto"];
// let myTypeOptions = {};

// fontTypes.forEach(font => {
//     let element = document.createElement("option");
//     element.value = font;
//     element.text = font;
//     element.className = font.trim();
//     els['fontType'].appendChild(element);
//     myTypeOptions[font] = element;
// });

// let colors=["red","green","pink","gray","white","black"];
// let colorsOption={};

// colors.forEach(color => {
//     let el=document.createElement("option");
//     el.value=color;
//     el.className=color;
//     el.textContent=color;
//     els['color'].appendChild(el);
//     colorsOption[color]=el;
// });

// let fontWeights=[];
// for(let i=16; i<=30; i++){
//     fontWeights.push(i);
// }

// let fontWeightOption={};

// fontWeights.forEach(weight => {  
//     let el =document.createElement("option");
//     el.value=weight;
//     el.className=`weight-${weight}`;
//     el.textContent=weight;
//     els['fontWeight'].appendChild(el);
//     fontWeightOption[weight]=el;
// });
// //store in the local storage
// console.log(window.localStorage.setItem("fontType",myTypeOptions));
// window.localStorage.setItem("colors",colorsOption);
// window.localStorage.setItem("fontWhigt",fontWeightOption);
// on

let font = document.querySelector("#font");
let color = document.querySelector("#color");
let size = document.querySelector("#size");

font.onchange = function(){
    window.localStorage.setItem("font", font.value);
    document.body.style.fontFamily = font.value;
}
color.onchange = function(){
    window.localStorage.setItem("color", color.value);
    document.body.style.color = color.value;
}
size.onchange = function(){
    window.localStorage.setItem("size", size.value);
    document.body.style.fontSize = size.value;
}

document.body.style.fontFamily = window.localStorage.getItem("font");
document.body.style.color = window.localStorage.getItem("color");
document.body.style.fontSize = window.localStorage.getItem("size");

font.value = window.localStorage.getItem("font");
color.value = window.localStorage.getItem("color");
size.value = window.localStorage.getItem("size");
//form assiegment
// let one = document.querySelector("#one");
// let two = document.querySelector("#two");
// let three = document.querySelector("#three");
// let select = document.querySelector("#select");

// one.oninput = function(){
//     window.sessionStorage.setItem("text-1", one.value);
// }
// two.oninput = function(){
//     window.sessionStorage.setItem("text-2", two.value);
// }
// three.oninput = function(){
//     window.sessionStorage.setItem("text-3", three.value);
// }
// select.onchange = function(){
//     window.sessionStorage.setItem("select", select.value);
// }

// one.value = window.sessionStorage.getItem("text-1");
// two.value = window.sessionStorage.getItem("text-2");
// three.value = window.sessionStorage.getItem("text-3");
// select.value = window.sessionStorage.getItem("select");