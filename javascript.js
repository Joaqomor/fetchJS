document.addEventListener("DOMContentLoaded", ()=> {
  setTimeout(() => {
    
     recuperarProductos(URL) 
         
  }, 2000);
})


selecMaterial.addEventListener('change',()=>{
    debugger
    console.log(selecMaterial.value);
    if(selecMaterial.value == 'all'){
        recuperarProductos(stockProductos)
    }else{
        let arrayNuevo = stockProductos.filter(elemento => elemento.material === selecMaterial.value)
        console.log(arrayNuevo);
        recuperarProductos(arrayNuevo)
    }
})
 
/* mostrarProductos(stockProductos)

function mostrarProductos(array){

    filas.innerHTML= "" 

    array.forEach(elemento => {
    let tr = document.createElement('tr')
    
    tr.innerHTML=`<th scope="row">${elemento.id}</th>
    <td>${elemento.material}</td>
    <td>${elemento.medida}</td>
    <td>${elemento.espesor}</td>
    <td>${elemento.peso}</td>
    <td>${elemento.valor}</td>
    <td>${elemento.stock}</td>`
    filas.appendChild(tr)

    
    
    


    }) */
    
   
    let btnElimina = document.getElementById(`btnElimina`)

    btnElimina.addEventListener('click',()=>{
        let el = parseInt(prompt("indique el ID del material a eliminar"))
        let numeroId = stockProductos.findIndex( x => x.id === el )
        Swal.fire({
            title: 'Esta seguro que quiere eliminar el producto?',
            text: "Una vez eliminado no podrá recuperarlo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed && numeroId != -1) {
              Swal.fire(
                'Eliminado!',
                'El producto ha sido borrado.',
                'success'
              )
              stockProductos.splice(numeroId,1)
            } else{
                Swal.fire({
                    icon: 'error',
                    title: 'Cancelado',
                    text: 'No se borrará el producto',
                  })
            }
        
           
        filas.innerHTML= "" 
        recuperarProductos(stockProductos)
        
        
          })
        
            
    })
    


/* } */

    
btnAgrega.addEventListener('click',()=>{

        const selecMat = document.getElementById ("selecMat").value;
        const selecMedida = document.getElementById ("selecMedida").value;
        const selecEspesor = document.getElementById ("selecEspesor").value;
        const inputPeso = document.getElementById("inputPeso").value;
        const inputValor = document.getElementById("inputValor").value;
        const inputStock = document.getElementById("inputStock").value;

       

guardarNuevoStock()

  
stockProductos.push ({
    
    id: parseInt(Math.random() * 100),
    material: selecMat,
    medida: selecMedida,
    espesor: parseInt(selecEspesor),
    peso: parseInt(inputPeso),
    valor: parseInt(inputValor),
    stock:parseInt(inputStock)

    
}) 


        
        
filas.innerHTML= ""
recuperarProductos(stockProductos)

Swal.fire(
    'Buen Trabajo!',
    'Agregaste un nuevo producto al stock.',
    'success'
  )

}) 

let = guardarLocal = (clave,valor )=>{localStorage.setItem(clave,valor)}

guardarLocal ("stockProductos", JSON.stringify(stockProductos))

function guardarNuevoStock() {

        let material = selecMat.value
        let medida = selecMedida.value
        let espesor = selecEspesor.value 
        let peso = inputPeso.value 
        let valor = inputValor.value 
        let stock = inputStock.value 

        localStorage.setItem ("material", material)
        localStorage.setItem ("medida", medida)
        localStorage.setItem ("espesor", espesor)
        localStorage.setItem ("peso", peso)
        localStorage.setItem ("valor", valor)
        localStorage.setItem ("stock", stock)

}

function recuperaUltimoStock (){
    selecMat.value = localStorage.getItem("material")
    selecMedida.value = localStorage.getItem("medida")
    selecEspesor.value = localStorage.getItem("espesor")
    inputPeso.value = localStorage.getItem("peso")
    inputValor.value = localStorage.getItem("valor")
    inputStock.value = localStorage.getItem("stock")

}

recuperaUltimoStock ()



   


    












