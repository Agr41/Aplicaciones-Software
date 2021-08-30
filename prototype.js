let inputP = document.getElementById("prop");
let inputV = document.getElementById("value");
let botonA = document.getElementById("agregar");
let botonE = document.getElementById("eliminar");
let botonB = document.getElementById("buscar");
//let botonM = document.getElementById("mostrar");
let displayB = document.getElementById("display1");
let displayT = document.getElementById("display2");

function Inventario (nombre) {
    this.nombre = nombre;
    this.articulos = [];
};
Inventario.prototype = {
    add: function (nombre, cantidad) {
        this.articulos[nombre] = cantidad;
    },
    borrar: function (nombre) {
        delete this.articulos[nombre];
    },
    cantidad: function (nombre) {
        return this.articulos[nombre];
    },
    getNombre: function () {
        return this.nombre;
    },
    mostrar: function () {
        return this.articulos;
    }
};

let colores = new Inventario("Colores");

botonA.addEventListener("click", ()=>{
    colores.add(inputP.value, inputV.value);
    displayT.innerHTML = "";
    for(let element in colores.mostrar()){
        displayT.innerHTML+=`<div>${element}:${colores.mostrar()[element]}</div>`
    }
    console.log("Agregado");
});
botonE.addEventListener("click", ()=>{
    colores.borrar(inputP.value);
    displayT.innerHTML = "";
    for(let element in colores.mostrar()){
        displayT.innerHTML+=`<div>${element}:${colores.mostrar()[element]}</div>`
    }
    console.log("Eliminado");
});
botonB.addEventListener("click", ()=>{
    displayB.innerHTML = "Valor = " + colores.cantidad(inputP.value);
    console.log("Encontrado");
});
/* botonM.addEventListener("click", ()=>{
    displayT.innerHTML = "";
    for(let element in colores.mostrar()){
        displayT.innerHTML+=`<div>${element}:${colores.mostrar()[element]}</div>`
    }
}); */
//colores.mostrar()