 function getobject(http){
    return new Promise((resolve,reject)=>{
        let req= new XMLHttpRequest()
        req.onload=function (){
            if(this.readyState === 4 && this.status === 200){
                resolve(JSON.parse(this.responseText))
            }
            else{
            reject(Error("data don't found"))
            }t
        
        }
        req.open("GET", http);
        req.send();
    })
 
}

getobject("./object.jsonn").then(
      (result)=>{
        result.length=5
        return result
    }
    ).then(
        (result)=>{
            for(let i=0;i<result.length;i++){
                let div2=document.createElement("div")
                let title1=document.createElement("h3")
                title1.textContent=result[i].title
                div2.appendChild(title1)
                let articalid=document.createElement("p")
                articalid.textContent=result[i].description
                div2.appendChild(articalid)
                document.body.appendChild(div2)
            }
        }
        ).catch(
            (rejectvalue)=>{console.log(`its rejected ${reject}`)}
            )

fetch("./object.json").then((result)=>{
    let data= result.json()
    return data
})
.then((data)=>{
  
    data.length=5
    return data})
    .then((result)=>{
        for(let i=0;i<result.length;i++){
            let div2=document.createElement("div")
            let title1=document.createElement("h3")
            title1.textContent=result[i].title
            div2.appendChild(title1)
            let articalid=document.createElement("p")
            articalid.textContent=result[i].description
            div2.appendChild(articalid)
            document.body.appendChild(div2)
        }
    }).catch((rejectvalue)=>{console.log(`its rejected ${reject}`)}).finally(console.log("finished"))