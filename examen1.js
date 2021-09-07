let inputI = document.getElementById("ind");
let inputN = document.getElementById("nom");
let inputC = document.getElementById("car");
let inputS = document.getElementById("sem");
let botA = document.getElementById("agr");
let botE = document.getElementById("eli");
let botM = document.getElementById("mod");
let botB = document.getElementById("bus");
let display1 = document.getElementById("dis1");
let display2 = document.getElementById("dis2");
//class
class Inventario {
    constructor(id, nombre, carrera, semestre) {
        this.id = id;
        this.nombre = nombre;
        this.carrera = carrera;
        this.semestre = semestre;
        this.articulos = [];
    }
    add (id, nombre, carrera, semestre) {
        this.articulos[id] = {nombre, carrera, semestre};

    }
    borrar (id) {
        delete this.articulos[id];
    }
    buscar (id) {
        let myJSON = JSON.stringify(this.articulos[id], null, 2);
        return myJSON;
    }  
    modificar (id, nombre, carrera, semestre) {
        this.articulos[id] = {nombre, carrera, semestre};
    } 
    mostrar () {
        let str = JSON.stringify(this.articulos, null, 2);
        return str; 
    }
}
var alumnos = new Inventario("Alumnos");

botA.addEventListener("click", ()=>{
    alumnos.add(inputI.value, inputN.value, inputC.value, inputS.value);
    display1.innerHTML = alumnos.mostrar();
    /* for(let element in alumnos.mostrar()){
        display1.innerHTML+=`${element}:${alumnos.mostrar()[element]}`
    } */
    console.log("Agregado");
});
botE.addEventListener("click", ()=>{
    alumnos.borrar(inputI.value);
    display1.innerHTML = alumnos.mostrar();
    console.log("Eliminado");
});
botB.addEventListener("click", ()=>{
    alumnos.buscar(inputI.value);
    display2.innerHTML = alumnos.buscar(inputI.value);
    console.log("Encontrado");
});

botM.addEventListener("click", ()=>{
    alumnos.modificar(inputI.value, inputN.value, inputC.value, inputS.value);
    display1.innerHTML = alumnos.mostrar();
    console.log("Modificado");
});


