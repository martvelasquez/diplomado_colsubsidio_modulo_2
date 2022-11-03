const list = document.getElementById("lista")
//console.log(list)

/*const lt = document.createElement('li')
lt.textContent = 'primer elemento'

list.appendChild(lt)*/
/*estas 3 lineas anteriores las paso para abajo*/

const arrayElement = ['primer elemento', 'segundo', 'tercero']

//arrayElement.forEach(item => {
   // console.log(item)
 //   const lt = document.createElement('li')
 //   lt.textContent = item

 //   list.appendChild(lt)
//})

arrayElement.forEach(item => {
    list.innerHTML += `<li>${item}</li>`
})