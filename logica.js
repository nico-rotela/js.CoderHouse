const carrito = [];
let contenedor = document.getElementById("misprods");




function renderizarProductos(){
    for(const producto of productos){
        contenedor.innerHTML += `
        <div class="card col-sm-2">
            <img src=${producto.foto} class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.id}</h5>
                <p class="card-text">${producto.nombre}</p>
                <p class="card-text">${producto.precio}</p>
                <button id="btn${producto.id}" class="btn btn-primary">comprar</button>
            </div>
      </div>
        `;
    }

    // eventos
    productos.forEach((producto)=>{
        document.getElementById(`btn${producto.id}`).addEventListener("click",function(){
            agregarAlCarrito(producto);
        })
    })
}


renderizarProductos();

function agregarAlCarrito(productoAComprar){
    carrito.push(productoAComprar);
    alert(productoAComprar.nombre+" agregado al carrito");
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoAComprar.id}</td>
            <td>${productoAComprar.nombre}</td>
            <td>${productoAComprar.precio}</td>
        </tr>
    `;
    let totalCarrito = carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0);
    document.getElementById("total").innerText = "Total a pagar $: "+totalCarrito;
}


// Guardar en Storage
function guardarEnStorage(clave, valor) {    
    localStorage.setItem(clave, valor); 
}
guardarEnStorage("stock", JSON.stringify(productosStock));


//recuperar del storage
const stockStorage = localStorage.getItem("stock");
const stockRecuperado = JSON.parse(stockStorage);
console.log(stockRecuperado)























