//FUNCION PARA PINTAR LA INFO QUE LLEGA DEL API
export function pintarCanciones(canciones){
   
    let fila=document.getElementById("fila")

    //recorro el arreglo de canciones
    canciones.tracks.forEach((cancion)=>{
        console.log(cancion.preview_url)
        console.log(cancion.album.images[0].url)

        //crear una columna para cada cancion
        let columna=document.createElement("div")
        columna.classList.add("col")

        //creo la tarjeta
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100")

        //creo la foto
        let foto=document.createElement("img")
        foto.src=cancion.album.images[0].url
        foto.classList.add("card-img-top")

        //creo el audio
        let audio=document.createElement("audio")
        audio.src=cancion.preview_url
        audio.classList.add("w-100")
        audio.setAttribute("controls","controls")

        let divBody=document.createElement("div")
        divBody.classList.add('card-body')

        let title=document.createElement('h5')
        title.classList.add('card-title')
        title.textContent=cancion.name;

        //PADRES E HIJOS
        divBody.appendChild(title);
        tarjeta.appendChild(foto);
        tarjeta.appendChild(audio);
        tarjeta.appendChild(divBody);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);

    })
}