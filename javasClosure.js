let inputV = document.getElementById("val");
let inputN = document.getElementById("num");
let butA = document.getElementById("add");
let butD = document.getElementById("del");
let butS = document.getElementById("sea");
let mostrar = document.getElementById("mos");

let colores = inventario("Colores");

butA.addEventListener('click', ()=>{
    colores.add(inputV.value, inputN.value);
    console.log("Agregado");
});
butD.addEventListener('click', ()=>{
    colores.del(inputV.value);
    console.log("Eliminado");
});
butS.addEventListener('click', ()=>{
    mostrar.innerHTML = colores.num(inputV.value);
    console.log("ok");
}); 


function inventario(nom){
    let nombre = nom;
    let elementos = {};

    function add(nombre,cantidad){
        elementos[nombre]=cantidad;
    };

    function del(nombre){
        delete elementos[nombre];
    };

    function num(nombre){
        return elementos[nombre];
    };

    function nomb(){
        return nombre
    };

    function todo(){
        return elementos;
    }

    return  {
                add,
                del,
                num,
                nomb,
                todo
            }
}

//colores.todo()