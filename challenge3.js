document.addEventListener('DOMContentLoaded', (event) => {
    //create the header
    let header = document.createElement("header");

    //styling the header
    header.style.width = "100%";
    header.style.height = "50px";
    header.style.backgroundColor = "green";
    header.style.display = "flex";
    header.style.justifyContent = "space-between";
    header.style.alignItems = "center";
    header.style.padding = "0 50px";

    document.body.appendChild(header);
});

//create logo
// let logo=document.createElement("div");
// logo.className="logo";
// logo.textContent="Elzero"
// //styling the logo
// logo.style.color="green";
// logo.style.fontWeight="bold";
// logo.style.fontSize="24px"

// //create the div container list of likns
// let links=docuemnt.createElement("div")
// links.className="navbar-links"
// //styling navbar-links
// links.style.display="flex"
// //create likks items
// function listLinks(text,link){
//     let  el=document.createElement("a");
//     el.href=link;
//     el.textContent=text;
// }
// links.append(listLinks("hOME","#"))
// links.append(listLinks("ABOUT","#"))
// links.append(listLinks("CONTACT","#"))
// console.log(links)


// document.body.appendChild(header)
// header.appendChild(logo)