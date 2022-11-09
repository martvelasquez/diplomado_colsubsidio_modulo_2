
function ejercicio9(argument1){
        let i = 0
        while ( i < argument1){
            
                const cardjs = document.getElementById("cards");
                const fragment = document.createDocumentFragment()
               const div = document.createElement('div');
                const divrs = document.createElement('div');
                const divrsp = document.createElement('div');
                const divchtc = document.createElement('div');
                const div_bod = document.createElement('div');
                const img = document.createElement("img");
                const h3 = document.createElement('h3');
                const h5 = document.createElement('h5');
                const p = document.createElement('p');
                const a = document.createElement('a');
        
                const divrs1 = document.createElement('div');
                const divrsp1 = document.createElement('div');
                const divchtc1 = document.createElement('div');
                const div_bod1 = document.createElement('div');
                const img1 = document.createElement("img");
                const h31 = document.createElement('h3');
                const h51 = document.createElement('h5');
                const p1 = document.createElement('p');
                const a1 = document.createElement('a');
        
                const divrs2 = document.createElement('div');
                const divrsp2 = document.createElement('div');
                const divchtc2 = document.createElement('div');
                const div_bod2 = document.createElement('div');
                const img2 = document.createElement("img");
                const h32 = document.createElement('h3');
                const h52 = document.createElement('h5');
                const p2 = document.createElement('p');
                const a2 = document.createElement('a');
        
        
                div.setAttribute("class", "row gy-3 my-3")
                divrs.setAttribute("class", "col-sm-6 col-md-6 col-lg-4 show-col")
                divrsp.setAttribute("class", "card w-100")
                divchtc.setAttribute("class", "card-header text-center")
                div_bod.setAttribute("class", "card-body",)
                h3.setAttribute("class","title")
                h3.textContent = "Card con DOM"
                h5.setAttribute("class","card-tittle")
                h5.textContent = "title"
                p.setAttribute("class","card-text")
                p.textContent = "Galaxias"
                a.setAttribute("class","btn btn-secondary")
                a.textContent = "Planetas"
                img.setAttribute("src","imagenes/slide1.jpg", "class", "card-img-top")
                divrs1.setAttribute("class", "col-sm-6 col-md-6 col-lg-4 show-col")
                divrsp1.setAttribute("class", "card w-100")
                divchtc1.setAttribute("class", "card-header text-center")
                div_bod1.setAttribute("class", "card-body",)
                h31.setAttribute("class","title")
                h31.textContent = "Card con DOM"
                h51.setAttribute("class","card-tittle")
                h51.textContent = "title"
                p1.setAttribute("class","card-text")
                p1.textContent = "Galaxias"
                a1.setAttribute("class","btn btn-secondary")
                a1.textContent = "Planetas"
                img1.setAttribute("src","imagenes/slide1.jpg", "class", "card-img-top")
        
                divrs2.setAttribute("class", "col-sm-6 col-md-6 col-lg-4 show-col")
                divrsp2.setAttribute("class", "card w-100")
                divchtc2.setAttribute("class", "card-header text-center")
                div_bod2.setAttribute("class", "card-body",)
                h32.setAttribute("class","title")
                h32.textContent = "Card con DOM"
                h52.setAttribute("class","card-tittle")
                h52.textContent = "title"
                p2.setAttribute("class","card-text")
                p2.textContent = "Galaxias"
                a2.setAttribute("class","btn btn-secondary")
                a2.textContent = "Planetas"
        
        
        
                img2.setAttribute("src","imagenes/slide1.jpg", "class", "card-img-top")
        
                cardjs.appendChild(fragment)
                cardjs.appendChild(div)
                div.appendChild(divrs)
                divrs.appendChild(divrsp)
                divrsp.appendChild(divchtc)
                divrsp.appendChild(img)
                divrsp.appendChild(div_bod)
                div_bod.appendChild(h3)
                div_bod.appendChild(p)
                div_bod.appendChild(a)
                div.appendChild(divrs1)
                divrs1.appendChild(divrsp1)
                divrsp1.appendChild(divchtc1)
                divrsp1.appendChild(img1)
                divrsp1.appendChild(div_bod1)
                div_bod1.appendChild(h31)
                div_bod1.appendChild(p1)
                div_bod1.appendChild(a1)
                div.appendChild(divrs2)
                divrs2.appendChild(divrsp2)
                divrsp2.appendChild(divchtc2)
                divrsp2.appendChild(img2)
                divrsp2.appendChild(div_bod2)
                div_bod2.appendChild(h32)
                div_bod2.appendChild(p2)
                div_bod2.appendChild(a2)
                console.log(fragment)
        

            i++
        
    
    }  
   
 }

 ejercicio9(5)

