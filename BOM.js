assigment 1
let data=window.prompt("write number from -to","Example: 5-20”")
let arraydata=data.split("-");
let integarray=[]
for(let i=0;i<arraydata.length;i++){
    integarray.push(parseInt(arraydata[i]))
    if(integarray[0]<integarray[1]){
        for(let j=integarray[0];j<=integarray[1];j++){
            console.log(j)
        }
    } else{
        for(let j=integarray[1];j<=integarray[0];j++){
            console.log(j)
        }
    }
    
}
assiegment 3 && 4
let mydiv=document.createElement("div")
let text=document.createTextNode("10")
mydiv.appendChild(text)
document.body.appendChild(mydiv)
function counter(){
    mydiv.innerHTML-=1
    if(mydiv.innerHTML==="0"){
        // clearInterval(count) //for assiegment 3
        location.href = "https://google.com";
        
    }
    
}
let count=setInterval(counter,1000)

assiegment 5
let myp=document.createElement("p")
let textp=document.createTextNode("7")
myp.appendChild(textp)
document.body.appendChild(myp)
function counter2(){
    myp.innerHTML-=1
    if(myp.innerHTML==="5"){
        window.open("https://google.com", "_self", "width=400,height=400,left=100,top=10");
        if(myp.innerHTML==="0"){
            clearInterval(count2)
        }
        
    }
   
    
}
let count2=setInterval(counter2,1000)
let myp = document.createElement("p");
let textp = document.createTextNode("7");
myp.appendChild(textp);
document.body.appendChild(myp);
let newwindow

function counter2() {
    myp.innerHTML -= 1;
    newwindow= window.open("", "_blank","width=400,height=400,left=100,top=10");
    if (myp.innerHTML === "6") {
        newwindow.location.href="https://google.com"
    }
    if (myp.innerHTML === "0") {
        clearInterval(count2);
    }
}

let count2 = setInterval(counter2, 1000);
assigment 2

function popu(){
    function create(el) {
        return document.createElement(el);
    }
    function createtext(text) {
        return document.createTextNode(text);
    }
    let myspan = create("a");
    let mydiv = create("div");
    let mytitle = create("h1");
    let myp = create("p");
    let texth1 = createtext("Welcome");
    let textp = createtext("Welcome to Elzero web school");
    let myspancontent = createtext("X");

    mytitle.appendChild(texth1);
    myp.appendChild(textp);
    myspan.appendChild(myspancontent);

    //styling myspan
    myspan.style.cssText = "color: black;background-color: red; border: 1px solid rgb(221, 221, 221); width:min-content; box-sizing: border-box; border-radius:50%; text-align: center; position: absolute;top: 10px; right: 5px;";

    mydiv.appendChild(mytitle);
    mydiv.appendChild(myp);
    mydiv.appendChild(myspan);

    //styling mydiv
    mydiv.style.cssText = "position: relative; color: white; padding: 20px; background-color: gray; border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; border-radius: .5rem; text-align: center;margin:auto";

    document.body.appendChild(mydiv);

myspan.onclick=function(){
    mydiv.style.display="none"

}}
setTimeout(popu,1000)
let parent = document.createElement("div");
let heading = document.createElement("h1");
let text = document.createElement("p");
let btn = document.createElement("button");

function popup(){
    heading.textContent = "Welcome";
    text.textContent = "Welcome To Alghanem Web Study";
    btn.textContent = "X";

    parent.append(heading, text, btn);
    document.body.append(parent);

    btn.addEventListener("click", function(){
        btn.parentElement.remove();
    });

    document.body.style.cssText = "font-family: arial, Tahoma";
    parent.style.cssText = "background-color: #eee; border: 1px solid #ccc; padding 20px; text-align: center; position: relative; width: 350px; height: 150px; margin: 20px auto;";
    btn.style.cssText = "background-color: red; color: white; font-weight: bold; border: none; width: 30px; height: 30px; border-radius: 50%; position: absolute; top: -10px; right: -10px"
}
setTimeout(popup, 5000);


