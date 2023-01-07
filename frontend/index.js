
fetch("http://localhost:3000/data").then((e)=>{
    
    return e.json()
}).then((data)=>{
    mappData(data);
    console.log(data)
});

const mappData=(data)=>{
    let classCont=document.querySelector(".mapClasses");
    data.map((el)=>{
        let cont=document.createElement("div");
        cont.setAttribute("class","grid")

        let imgdiv=document.createElement('div')
        let image=document.createElement("img");
        image.src=el.ImageUrl;

        let name=document.createElement("h3");
        name.textContent=el.Name;

        let desc=document.createElement('p');
        desc.textContent=el.ShortDesc;

        let button=document.createElement('button');
        button.innerText='View'

        imgdiv.append(image);
        cont.append(imgdiv,name,desc,button);
        classCont.append(cont)

    })

}