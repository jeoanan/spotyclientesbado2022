import { consultarCanciones } from "./servicioTopCanciones.js";
import {pintarCanciones} from "./pintarCanciones.js";

let topCanciones= await consultarCanciones();

console.log(topCanciones)

pintarCanciones(topCanciones);