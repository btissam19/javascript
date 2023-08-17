let req = new XMLHttpRequest();
req.open("GET","./artical.json")
req.send()
req.onreadystatechange=function(){
  console.log(req.status);
  console.log(req.responseText)
  if(this.readyState===4&& this.status===200){
    console.log("data loaded")
  }

  let maindeta=JSON.parse(this.responseText)
  for(let i=0;i<maindeta.length;i++){
    maindeta[i].category="ALL"
  }
  let updatedData=JSON.stringify(maindeta)
  let div =document.createElement("div")
  div.className="data";
  for(let i=0;i<maindeta.length;i++){
      let div2=document.createElement("div")
      let title1=document.createElement("h2")
      title1.textContent=maindeta[i].title
      div2.appendChild(title1)
      let articalid=document.createElement("p")
      articalid.textContent=maindeta[i].id
      div2.appendChild(articalid)
      let articalauth=document.createElement("p")
      articalauth.textContent=maindeta[i].author
      div2.appendChild(articalauth)
      let articalcat=document.createElement("p")
      articalcat.textContent=maindeta[i].category
      div2.appendChild(articalcat)
      div.appendChild(div2)
    
  }
  document.body.appendChild(div)
}

