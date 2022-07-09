
const recuperarProductos = async () => {
  
  fetch (URL)
  .then((response) => response.json())

  .then((data) => {
    stockProductos = data
    stockProductos.forEach(elemento => {
      let tr = document.createElement('tr')
      
      tr.innerHTML=`<th scope="row">${elemento.id}</th>
      <td>${elemento.material}</td>
      <td>${elemento.medida}</td>
      <td>${elemento.espesor}</td>
      <td>${elemento.peso}</td>
      <td>${elemento.valor}</td>
      <td>${elemento.stock}</td>`
      filas.appendChild(tr)
      
  
      }) 
  })
  .catch(error => {
    stockProductos= "se produjo un error"
  })
  .finally(() =>{
    spinner.innerHTML = "" 
    console.log ("se recuperaron satisfactoriamente los datos")
  })

  
}

