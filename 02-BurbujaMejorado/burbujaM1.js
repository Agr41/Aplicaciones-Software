const burbuja = arr => {                                        
    const longitud = arr.length;                              
    let ordenado = false;                                   
    for (let i = 0; i < longitud; i++) {                        
        ordenado=true;                                          
        for (let j = 0; j < longitud - 1 - i; j++) {            
            if (arr[j] > arr[j + 1]) {                          
                ordenado=false;                                 
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];   
            }
        }
        console.log(`Pasada ${i}`);
        console.log(`${arr}`);    
        if(ordenado){                      
            return arr;                     
        }                                  
    }
    
    return arr;                                                
};
const arr = ["Beny", "Andres", "Emilio", "Fernanda", "Jared", "Daniela", "Claudia", "Ivan", "Hernan", "Gabriel"]
const result = burbuja(arr);