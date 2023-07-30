let create = el => document.createElement(`${el}`);// function for not repeate the line of document.create
// create elements
let header = create("header");
let logo = create("h1");//for put logo
let menu = create("ul");//list of links
let content = create("div");//create boxes
let footer = create("footer");//for create footer
//add classes
header.className = "header";
logo.className = "logo";
menu.className = "menu";
content.className = "content";
footer.className = "footer";
// add to page
header.append(logo);
header.append(menu);
document.body.append(header);
document.body.append(content);
document.body.append(footer);
// loop for menu and content
for (let i = 1; i <= 15; i++){
    if(i <= 4){
        let menuList = create("li");
        menuList.className = `menu-list-${i}`;
        menu.append(menuList);
        menuList.style.cssText = "cursor: pointer"//for pointe with mouse 
    }
    let prodBox = create("div");
    let prodNum = create("span");
    prodBox.className = "product";
    prodBox.textContent = "product";
    prodNum.textContent = `${i}`;
    prodBox.prepend(prodNum);
    content.append(prodBox);
   // product style
    prodBox.style.cssText = "color: rgb(136, 136, 136); padding: 20px; background-color: white; border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; border-radius: .5rem; text-align: center";
    prodNum.style.cssText = "display: block; color: black; font-size: 40px; margin-bottom: 20px";
 }
//add text
logo.textContent = "Elzero";
document.querySelector(".menu-list-1").textContent = "Home";
document.querySelector(".menu-list-2").textContent = "Service";
document.querySelector(".menu-list-3").textContent = "About";
document.querySelector(".menu-list-4").textContent = "Contact";
footer.textContent = "Copyright 2021";
// web page styling
document.body.style.cssText = "margin: 0; font-family: Tahoma, Arial; background-color: rgb(236, 236, 236);";
header.style.cssText = "display: flex; align-items: center; justify-content: space-between; background-color: white; padding: 20px";
logo.style.cssText = "color: rgb(35, 169, 110); font-size: 50px";
menu.style.cssText = "display: flex; justify-content: space-between; list-style: none; gap: 15px; font-size: 20px";
content.style.cssText = "display: flex; flex-wrap: wrap; gap: 20px; padding: 20px; justify-content: center; min-height: (100vh - 142px); box-sizing: border-box";
footer.style.cssText = "background-color: rgb(35, 169, 110); color: white; font-size: 40px; font-wight: bold; text-align: center; padding: 20px"


// #####################################################steps###############################################################
/* first we create a function for create element minimzlig
   than we do a looop for create header ekement and also div content
   Than we put content 
   than we put style for eacelement
 */