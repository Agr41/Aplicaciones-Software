let inputV = document.getElementById("val");
let inputN = document.getElementById("num");
let butA = document.getElementById("add");
let butD = document.getElementById("del");
let butS = document.getElementById("sea");
let butM = document.getElementById("tod");
let mostrar = document.getElementById("mos");
let mostrarT = document.getElementById("dis")

var colores = new Invent("Colores");

butA.addEventListener('click', ()=>{
    colores.add(inputV.value, inputN.value);
    console.log("Agregado");
});
butD.addEventListener('click', ()=>{
    colores.borrar(inputV.value);
    console.log("Eliminado");
});
butS.addEventListener('click', ()=>{
    mostrar.innerHTML = colores.cantidad(inputV.value);
    console.log("ok");
}); 
/* butM.addEventListener('click', ()=>{
    //mostrarT.innerHTML = colores.todo(;
    let ar = colores.todo();
    ar.forEach(function(elemento, indice){
        mostrarT.innerHTML += `${indice} ${elemento} hola`
    })
    console.log(colores.todo());
});  */

function Invent (nombre) {
    this.nombre = nombre;
    this.articulos = [];
    
    this.add = function (nombre, cantidad) {
        this.articulos[nombre] = cantidad;
    } 
    this.borrar = function (nombre) {
        delete this.articulos[nombre];
    } 
    this.cantidad = function (nombre) {
        return this.articulos[nombre];
    } 
    this.getNombre = function () {
        return this.nombre;
    }
    this.todo = function () {
        return this.articulos;
    }
}

//colores.todo()