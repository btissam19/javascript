// take the var value
let numbrval=document.querySelector('[name="elements"]');
let textval=document.querySelector('[name="texts"]');
let typeval=document.querySelector('[name="type"]');
let creatval=document.querySelector('[name="create"]');
let resultt=document.querySelector(".results")
let form=document.forms[0]
let pelement=document.createElement("p")
form.append(pelement)
pelement.remove()
console.log(numbrval.nextSibling)
console.log(typeval.previousElementSibling)
console.log(creatval.parentElement)
//show the result
form.onsubmit=function(event){
    event.preventDefault();/// Don't submit the data
    document.querySelectorAll(".box").forEach(event => {event.remove()});//remove the box classe befor create the new one
    for(let i=0;i<numbrval.value;i++){
            let element=document.createElement(typeval.value); //create thE new element
            element.setAttribute("class","box") //set attribut to the new element
            element.setAttribute("title","element")
            element.setAttribute("id",`id-${i}`)
            text=document.createTextNode(textval.value)//write thE text we want to the new elament
            element.appendChild(text)//add the text we create the new element
           element.style.display = "inline-block";// add diffrent syle to THe new element
           element.style.width = "200px";
           element.style.margin = "20px";
           element.style.padding = "10px";
           element.style.color = "white";
           element.style.backgroundColor = "orange";
           element.style.textAlign = "center";
           element.style.borderRadius = ".5rem";
        resultt.appendChild(element)// add the all element to the div existe in the index page
        } 
    }
//set styling for forms
let input=document.querySelectorAll(".input")//select all element with classe INPUT
let submit=document.querySelector('[type="submit"]')//select the create button
for(let i=0;i<input.length;i++){//add styling to the form
    input[i].style.display = "block";
    input[i].style.boxSizing = "border-box";
    input[i].style.width = "250px";
    input[i].style.padding = "10px";
    input[i].style.margin = "15px auto";
    input[i].style.borderRadius = ".5rem";
    input[i].style.border = "1px solid black";
}
submit.style.backgroundColor = "green";//add styling to the button
submit.style.display = "block";
submit.style.width = "250px";
submit.style.padding = "10px";
submit.style.borderRadius = ".5rem";
submit.style.border = "none";
submit.style.margin = "15px auto";
submit.style.color = "white";
//add event
window.onload = function () {//we add events 
    numbrval.focus();
  };
  numbrval.onblur=function(){
    textval.focus();
} 
typeval.onblur=function(){
    creatval.click();
}


console.log(document.styleSheets[0].rules[0])


