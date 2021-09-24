let inp1 = document.getElementById("inp1");
let inp2 = document.getElementById("inp2");
let inp3 = document.getElementById("inp3");
let inp4 = document.getElementById("inp4");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");

let display = document.querySelector(".display");

class Pila{
    constructor(){
        this.almacenPila=[];
        this.contPila=0;
    }

    push(Matricula, Nombre, Carrera, Semestre){
        this.almacenPila[this.contPila]={
            Matricula,
            Nombre,
            Carrera,
            Semestre
        };
        this.contPila++;
        return this.almacenPila;
    };
    pop(){
        if(this.contPila===0){
            return null;
        }
        this.contPila--;
        const elemento = this.almacenPila[this.contPila];
        delete this.almacenPila[this.contPila];
        return elemento;
    };
    peek(){
        if(this.contPila===0){
            return null;
        }
        let str = JSON.stringify(this.almacenPila[this.contPila-1]);
        return str;
    };
    size(){
        return this.contPila;
    };
    print(){
        let str = JSON.stringify(this.almacenPila);
        return str; 
    };
    isEmpty(){
        if(this.contPila===0){
            return "Verdadero";
        }
        return "Falso";
    }
}

const PILA = new Pila();
  
document.addEventListener('click',(element)=>{
    if(element.target.id==="btn1"){
        PILA.push(inp1.value,inp2.value,inp3.value,inp4.value)
        display.innerHTML = PILA.print();
    }
    if(element.target.id==="btn2"){
        PILA.pop();
        display.innerHTML = PILA.print();
    }
    if(element.target.id==="btn3"){
        display.innerHTML = PILA.size();
    }
    if(element.target.id==="btn4"){ 
        display.innerHTML = PILA.print();
    }
    if(element.target.id==="btn5"){
        display.innerHTML = PILA.peek();
    }
    if(element.target.id==="btn6"){
        display.innerHTML = PILA.isEmpty();
    }
});
