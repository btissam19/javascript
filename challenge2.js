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
