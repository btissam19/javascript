// let eleAdd=document.querySelector(".classes-to-add");
// let eleRemov=document.querySelector(".classes-to-remove")
// let currentEl=document.querySelector("[ title='Current']")
// let classlist=document.querySelector(".classes-list")
// let addelement=document.querySelector(".addelement")
// eleAdd.onblur=function(event){
//     document.querySelectorAll('.creating').forEach(event => {event.remove()
        
//     });
//     let currentvalue=(eleAdd.value).tolowercase();
//     let currentArray=currentvalue.split(" ")
//     for(let i=0;i<currentArray.length;i++){
//          createElem=document.createElement("div")
//          creatText=document.createTextNode(currentArray[i]);
//          createElem.id=`currentElement-${i}`
//          createElem.setAttribute("class",currentArray[i])
//          createElem.appendChild(creatText)
//          createElem.style.display = "inline-block";// add diffrent syle to THe new element
//          createElem.style.width = "200px";
//          createElem.style.margin = "20px";
//          createElem.style.padding = "10px";
//          createElem.style.color = "white";
//          createElem.style.backgroundColor = "orange";
//          createElem.style.textAlign = "center";
//          createElem.style.borderRadius = ".5rem";
//          addelement.appendChild(createElem)
   
//     }

//     currentEl.onclick=function(){
//         let removalue=(eleRemov.value).tolowercase()
//         let arrayRemov=removalue.split(" ")
//         for(let i=0;i<arrayRemov.length;i++){
//             if(arrayRemov[i]===createElem.textContent){
//                 createElem.remove()
//             }
//             else{
//                 addelement.textContent="nothing to remove"
//             }
//         }

//     }


// }


let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let current = document.querySelector("[title = 'Current']");
let cls = document.querySelector(".classes-list div");// this a methode for take the dive inside the .classes-list 

function addOrRemove(){
    // remove all elements at the start
    document.querySelectorAll("span").forEach(el => el.remove());// remove span element when we do load to the page
    
    // add and remove classes
    for (let i = 0; i < this.value.trim().split(" ").length; i++){
        if (add.value)
            current.classList.add(add.value.toLowerCase().trim().split(" ")[i]);// add element to thE classeliste
        
        if (remove.value)
        
            current.classList.remove(remove.value.toLowerCase().trim().split(" ")[i]);
    }
    this.value = "";

    // add and remove spans
    if(current.classList.length){
        [...current.classList].sort().forEach(el => {
            let clSpan = document.createElement("span");
            clSpan.textContent = el;
            cls.append(clSpan);
        });
    }else cls.textContent = "No Classes To Show";
}

add.onblur = addOrRemove;
remove.onblur = addOrRemove;
