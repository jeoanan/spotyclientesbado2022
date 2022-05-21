import { generarToken } from "./servicioGenerarToken.js";
export const URI_TOP_CANCIONES='https://api.spotify.com/v1/artists/2XNJ1dXD5AjaHZTSM7qPlH/top-tracks?market=US';

//1.1 URI del servicio que genera tokens
export const URI_GENERAR_TOKEN='https://accounts.spotify.com/api/token';

//DATOS DE ENVIO (POST) para el TOKEN
const ID_CLIENTE = 'client_id=b9e1b8e9953f43118b0922d246b8e07b';
const CLIENTE_SECRETO = 'client_secret=d11751fcd9aa41c98363aa972808f30a';
const GRAND_TYPE='grant_type=client_credentials';

const DATOS_PETICION=`${ID_CLIENTE}&${CLIENTE_SECRETO}&${GRAND_TYPE}`

export const PETICION_GENERAR_TOKEN={
    method:"POST",
    headers:{"Content-type":"application/x-www-form-urlencoded"},
    body:DATOS_PETICION
}

let token = generarToken();

const TOKEN_GENERATE=`${token.token_type} ${token.access_token}`

export const PETICION_TOP_CANCIONES={
    method:"GET",
    headers:{Authorization:TOKEN_GENERATE}
}
