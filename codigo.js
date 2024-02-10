    //codigo principal
    const listaProcesos=[];//arreglo vacio de procesos
    //let numProcesos = (process.argv[2]?process.argv[2]:5); //lectura en Node
    let numProcesos = prompt("Introduce cuantos procesos se deberian procesar con RoundRobin: ");
    for(let i=0;i<numProcesos;i++)//un ciclo para crear los procesos
    {
        let unProceso = {
        numProceso:i+1,
        insts:generarProceso()//crear un proceso y guardarlo en una lista
    };
    listaProcesos.push(unProceso);
    }

    iniciarSimulacion(listaProcesos);

// funciones

    function iniciarSimulacion(procesos){
    let cadena;//impresion en consola
    let terminados;
    let i=0 //control de linea a imprimir
    do{
            terminados=0; //inicializar contador de terminados
            for(let j=0;j<procesos.length;j++)
            {
                console.log("Proceso "+procesos[j].numProceso);
                
                if(procesos[j].insts[i]==undefined) 
                {
                    cadena = "Terminado"
                    terminados++;//y contarlo como proceso terminado
                }else cadena = procesos[j].insts[i];
                console.log(cadena);//imprimir
            }
            i++
        }while(terminados!=procesos.length); //todos los procesos ya estan terminados.   
    }

function generarProceso(){
    let numInsts = Math.floor(Math.random()*5)+1;//1-6 instrucciones posibles
    let lineasPosibles=["let a = 3;","let b = 5;","console.log(a+b);","let a = 54;","let b = 23;",
        "console.log(a-b);","let a = 21;","let b = 7;","let c = 12;","console.log(a-b+c);"
        ,"let a = 67;","let b = 12;","let c = 2;","console.log(a/b*2);","let a = 67;",//instrucciones disponibles
        "let b = 12;","let c = 2;","console.log(a/b*2);","console.log('Hola Amigo');"];
    let lista=[];
    for(let i=0;i<numInsts;i++)//controlar el numero de instrucciones que tendra el proceso
        {
            let numLinea = Math.floor(Math.random()*lineasPosibles.length);//elige de manera aleatoria la linea que tendra.
            lista.push(lineasPosibles[numLinea]);
        }  
    return lista;
}