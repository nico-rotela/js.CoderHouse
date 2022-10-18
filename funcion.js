let bienvenida = prompt("hola bienvenido soy el asistente de articulos gamer\n como es tu nombre?");
console.log("bienvenido a articulos gamer:" +bienvenida);

let mouse = prompt("de que mouse necesitas la informacion?\n-opcion 1\n-opcion2\n-opcion3");

for(i=1;i<=2;i++){
    if (mouse == 1){
        mouse = prompt("de que mouse necesitas la informacion?\n-opcion 1\n-opcion2\n-opcion3");
        console.log("mouse seleccionado(opcion1):\n-mouse Logitech.\n-modelo: m100.\n-valor: $2.000");
    }else if(mouse == 2){
        mouse = prompt("de que mouse necesitas la informacion?\n-opcion 1\n-opcion2\n-opcion3");
        console.log("mouse seleccionado(opcion2):\n-mouse razer.\n-modelo: deathadder v2\n-valor: $1.500");
    }else if(mouse == 3){
        mouse = prompt("de que mouse necesitas la informacion?\n-opcion 1\n-opcion2\n-opcion3");
        console.log("mouse seleccionado (opcion 3):\n-mouse redragon.\n-modelo: gainer m610\n- valor: $3.000");
    }else{
        console.log("no encontramos el producto");
        break
    }
}

// segunda entrega del proyecto

// array

const productos =[
    {
        id:22,
        nombre: "teclado",
        marca:  "Redragon",
        modelo: "KUMARA K552B",
        precio: 1999
    },
    {
        id:30,
        nombre: "teclado",
        marca:  "Logitech",
        modelo: "G413",
        precio: 1500 
    },
    {
        id:58,
        nombre: "teclado",
        marca:  "HyperX",
        modelo: "Alloy Core",
        precio: 4000
    }
];


// foreach

let conocerProductos = prompt("te gustaria conocer nuestros teclados? si/no")

if (conocerProductos == "si"){
    productos.forEach((producto) => console.log(producto));
}else if(conocerProductos == "no") {
    console.log("gracias, vuelva pronto.")
};

// filter

let filtroPrecio = prompt("te gustaria gastar: \n1 + de $2000 , \n2 - de $2000")

if (filtroPrecio == 1){
    filtroPrecio = productos.filter((producto) => producto.precio > 2000)
    console.log(filtroPrecio)
}else if(filtroPrecio == 2){
    filtroPrecio = productos.filter((producto) => producto.precio < 2000)
    console.log(filtroPrecio)
}else{
    console.log("no se reconocio la respuesta")
};

let mouseCombo = 600
let tecladoCombo = 2300

function combo (a, b){
    return a + b
}
let sumaCombo = combo(mouseCombo,tecladoCombo)
console.log("tu combo de mouse y teclado sale: $" +sumaCombo)

