const cardjs = document.getElementById("cards");

const div = document.createElement('div');
const img = document.createElement("img");
const h5 = document.createElement('h5');
const p = document.createElement('p');
const a = document.createElement('a');
console.log(div)
h5.textContent = "Colombia"
p.textContent = "Nariño"
a.textContent = "Santuario de las Lajas"

div.setAttribute("Class", "card")
//div.setAttribute("Class", "card", "style", "width: 18rem;")
h5.setAttribute("class","card-tittle")
p.setAttribute("class","card-text")
a.setAttribute("class","btn btn-primary")
img.setAttribute("src","imagenes/slide1.jpg")
//img.setAttribute("src","imagenes/slide1.jpg")
//img.setAttribute("src","imagenes/slide1.jpg", "class", "card-img-top")
//console.log(cardjs)
cardjs.appendChild(div)
div.appendChild(img)
div.appendChild(h5)
div.appendChild(p)
div.appendChild(a)



