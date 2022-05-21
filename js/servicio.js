//PASOS PARA CONSUMIR UN API

//1. PA ONDE VOY? (CONOCER URI DEL SERVICIO O API A CONSUMIR)


//2. ARMO LA PETICION (que vas a hacer ome?)



//3. ARRANCA PS OME PAL SERVIDOR (CONSUMIR EL API)(el que va al servidor)
fetch(URI,PETICION)
.then((respuesta)=>{
    return(respuesta.json()) //garantizo formato JSON
})
.then((respuesta)=>{
    pintarCanciones(respuesta) //hago lo que quiera con la respuesta
})
.catch((error)=>{
    console.error(error) //muestro el fallo si no se pudo consumir el api
});


