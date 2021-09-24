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

class Cola {
    constructor(){
        this.almacenCola=[];        
        this.inicio=0;
        this.fin=0;            
    }

    enqueue(Matricula, Nombre, Carrera, Semestre){      
        this.almacenCola[this.fin]={
            Matricula,
            Nombre,
            Carrera,
            Semestre
        };   
        this.fin++;                            
        return this.almacenCola;                    
    }

    dequeue(){         
        if(this.inicio===this.fin){
            return null;
        }
        const elemento=this.almacenCola[this.inicio];
        delete this.almacenCola[this.inicio];
        this.inicio++;
        return elemento;
    }

    peek(){ 
        if(this.size()===0){
            return null;
        }
        let str = JSON.stringify(this.almacenCola[this.inicio]);
        return str;
    }

    size(){   
        return this.fin-this.inicio;
    }

    print(){      
        let str = JSON.stringify(this.almacenCola);
        return str;         
    }

    isEmpty(){             
        if(this.inicio===this.fin){
            return "Verdadero";
        }
        return "Falso";
        
    }
}

const COLA = new Cola();
  
document.addEventListener('click',(element)=>{
    if(element.target.id==="btn1"){
        COLA.enqueue(inp1.value,inp2.value,inp3.value,inp4.value);
        display.innerHTML = COLA.print();
    }
    if(element.target.id==="btn2"){
        COLA.dequeue();
        display.innerHTML = COLA.print();
    }
    if(element.target.id==="btn3"){
        display.innerHTML = COLA.size();
    }
    if(element.target.id==="btn4"){ 
        display.innerHTML = COLA.print();
    }
    if(element.target.id==="btn5"){
        display.innerHTML = COLA.peek();
    }
    if(element.target.id==="btn6"){
        display.innerHTML = COLA.isEmpty();
    }
});
