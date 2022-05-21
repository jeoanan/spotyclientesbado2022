import { consultarCanciones } from "./servicioTopCanciones.js";
import {pintarCanciones} from "./pintarCanciones.js";

let topCanciones= await consultarCanciones();

pintarCanciones(topCanciones);