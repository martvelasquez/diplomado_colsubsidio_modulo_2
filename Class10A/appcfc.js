const cards=[{
        title:"este es el titulo",
        contenido:"jdjdjddkkdkdkdkdk"
},

{
        title:"otro titulo",
        contenido:"jdjdjddkkdkdkdkdk1"


}]
function createcard({title})  {


        const cardjs = document.getElementById("cards");
        const fragment = document.createDocumentFragment()
        const div = document.createElement('div');
        const divrs = document.createElement('div');
        const divrsp = document.createElement('div');
        const div_bod = document.createElement('div');
        const img = document.createElement("img");
        const h3 = document.createElement('h3');
        const h5 = document.createElement('h5');
        const p = document.createElement('p');
        const a = document.createElement('a');


        div.setAttribute("class", "row")
        divrs.setAttribute("class", "col-4")
        divrsp.setAttribute("class", "card")
        div_bod.setAttribute("class", "card-body",)
        h3.setAttribute("class","title")
        h3.textContent = "Card con DOM"
        h5.setAttribute("class","card-tittle")
        h5.textContent = title
        p.setAttribute("class","card-text")
        p.textContent = "Galaxias"
        a.setAttribute("class","btn btn-secondary")
        a.textContent = "Planetas"


        img.setAttribute("src","imagenes/slide1.jpg", "class", "card-img-top")

        fragment.appendChild(h3)
        fragment.appendChild(div)
        div.appendChild(divrs)
        divrs.appendChild(divrsp)
        div.appendChild(img)
        div.appendChild(div_bod)
        div_bod.appendChild(h5)
        div_bod.appendChild(p)
        div_bod.appendChild(a)
        cardjs.appendChild(fragment)
        console.log(fragment)

        
    
    }  
   cards.forEach(element => {
        createcard(element)
   })
    



