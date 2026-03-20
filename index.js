//ejercicio 1
import fs from 'fs';
import { json } from 'stream/consumers';
const contenido = fs.readFileSync('productos.json','utf-8');
console.log('Contenido del archivo',contenido);

//ejercicio 2
function agregarProducto(nombre,precio)
{
let lectura = fs.readFileSync('productos.json','utf-8');
let productos = JSON.parse(lectura);
let nuevoProducto = { lectura.length + 1,  }


}