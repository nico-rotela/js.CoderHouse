let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let contenedor = document.getElementById("misprods");
let btnFinCompra = document.getElementById("finalizar");
let btnVerStock = document.getElementById("verStock");

// recuperar tabla desde el storage
if(carrito.lenght != 0){
    console.log("recuperando carrito de compras")
    dibujarTabla();
}

function dibujarTabla(){
    for(const producto of carrito){
        document.getElementById("tablabody").innerHTML +=`
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
        `;
    }
    totalCarrito = carrito.reduce((acumulador,producto) => acumulador + producto.precio,0);
    let infoTotal = document.getElementById("total");
    infoTotal.innerText="total a pagar $: "+totalCarrito
}


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

// agregar productos al carrito
function agregarAlCarrito(productoAComprar){
    carrito.push(productoAComprar);
    console.table(carrito)
    // sweet alert
    Swal.fire({
        title: productoAComprar.nombre,
        text: 'Se agregó al carrito',
        imageUrl: productoAComprar.foto,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: productoAComprar.nombre,
      });
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoAComprar.id}</td>
            <td>${productoAComprar.nombre}</td>
            <td>${productoAComprar.precio}</td>
            <td><button class="btn btn-light" onclick="eliminar(event)">🗑️</button></td>
        </tr>
    `;
    let totalCarrito = carrito.reduce((acumulador,prod)=>acumulador+prod.precio,0);
    document.getElementById("total").innerText = "Total a pagar $: "+totalCarrito;
    // storage
    localStorage.setItem("carrito",JSON.stringify(carrito))
}


// funciones boton finalizar compra
btnFinCompra.onclick = () => {
    if(carrito.length==0){
        Swal.fire({
            title: 'El carro está vacío',
            text: 'compre algun producto',
            icon: 'error',
            showConfirmButton: false,
            timer: 1500
          })
    }else{
        carrito = [];
        document.getElementById("tablabody").innerHTML="";
        let infoTotal = document.getElementById("total");
        infoTotal.innerText="Total a pagar $: ";
        Toastify({
            text: "Recibirás un mail con la información de tu compra",
            duration: 3000,
            gravity: 'bottom',
            position: 'left',
            style: {
                background: 'linear-gradient(to right, #00b09b, #96c92d)'
            }
        }).showToast();
        localStorage.removeItem("carrito");
    }
}

// borar productos del carrito
function eliminar(ev){
    let fila = ev.target.parentElement.parentElement;
    console.log(fila);
    let id = fila.children[0].innerText;
    console.log(id);
    let indice = carrito.findIndex(producto => producto.id == id);
    console.log(indice);
    // remover un producto del carro
    carrito.splice(indice,1);
    console.table(carrito);
    // remover la fila de la tabla
    fila.remove();
    // recalcular total
    let preciosAcumulados = carrito.reduce((acumulador,producto) => acumulador+producto.precio,0);
    total.innerText="Total a pagar $: "+preciosAcumulados;
    //storage
    localStorage.setItem("carrito",JSON.stringify(carrito));
}


// stock
function obtenerDatosJson (){
    const URLJSON = "/stock.json";
    fetch(URLJSON)
        .then(res => res.json())
        .then(DatosTraidos =>{
            const stockActual = DatosTraidos.StockProds;
            stockActual.forEach(prod => {
                document.getElementById("listaStock").innerHTML += `
                <tr>
                <td>${prod.nombre}</td>
                <td>${prod.stock}</td>
            </tr>
                `;
            })
        })
}
obtenerDatosJson();

// ver/ocultar stock
btnVerStock.onclick = () => {
}

function ocultar(){ 
    document.getElementById('listaStock').style.display = 'none'; 
}

function mostrar(){
    document.getElementById('listaStock').style.display = 'block';
}















