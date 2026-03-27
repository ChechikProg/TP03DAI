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
let nuevoProducto = { id: productos.length + 1, nombre, precio };
productos.push(nuevoProducto);

fs.writeFileSync("productos.json", JSON.stringify(productos, null, 2), "utf-8");
console.log("Producto guardado exitosamente");

}
agregarProducto("Mouse", 12000);