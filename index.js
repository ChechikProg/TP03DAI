//ejercicio 1
import fs from 'fs';
import dayjs from 'dayjs';
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
//agregarProducto("Mouse", 12000);
//ejercicio 3


function mostrarFechaYHora() {
const ahora = dayjs();
const fecha = ahora.format('DD/MM/YYYY');
const hora = ahora.format('HH:mm');
console.log("Fecha actual:", fecha);
console.log("Hora actual:", hora);
}
mostrarFechaYHora();

//ejercicio 4
import axios from "axios";

async function obtenerPais(nombrePais) {
try {
const response = await axios.get(`https://restcountries.com/v3.1/name/${nombrePais}`);    
const pais = response.data[0];

console.log("País:", pais.name.common);
console.log("Capital:", pais.capital[0]);
console.log("Region:", pais.region);
console.log("Poblacinn:", pais.population);

} catch (error) {
console.log("Error al obtener el pais");
}
}
obtenerPais("Mozambique");
//ejercicio 5

function buscarProducto(nombre) {
const data = fs.readFileSync("productos.json", "utf-8");
const productos = JSON.parse(data);

const producto = productos.find(p => p.nombre.toLowerCase() === nombre.toLowerCase());

if (producto) {
    console.log("Producto encontrado");
    console.log("Nombre:", producto.nombre);
    console.log("Precio:", producto.precio);
} else {
    console.log("Producto no encontrado");
}
}

// Ejemplo
buscarProducto("Micrófono USB");
//ejercicio 6

function generarCSV() {
const data = fs.readFileSync("productos.json", "utf-8");
const productos = JSON.parse(data);

let csv = "nombre,precio\n";

productos.forEach(p => {
    csv += `${p.nombre},${p.precio}\n`;
});

fs.writeFileSync("productos.csv", csv);

console.log("Archivo CSV generado correctamente");
}

// Ejecutar
generarCSV();
//ejercicio 7
let contador = 1;
const intervalo = setInterval(() => {
console.log(contador);
contador++;
}, 1000);

setTimeout(() => {
clearInterval(intervalo);
console.log("Fin del contador");
}, 11000);

//ejercicio 8 
function analizarTexto(texto) {
const caracteres = texto.length;
const palabras = texto.trim().split(/\s+/).length;

const vocales = (texto.match(/[aeiou]/gi) || []).length;
const consonantes = (texto.match(/[bcdfghjklmnñpqrstvwxyz]/gi) || []).length;

return {
caracteres,
palabras,
vocales,
consonantes
};
}


console.log(analizarTexto("Hola mundo"));

// ejercicio 9 
function validarPassword(password) {
const tieneLongitud = password.length >= 8;
const tieneNumero = /[0-9]/.test(password);
const tieneMayuscula = /[A-Z]/.test(password);

if (tieneLongitud && tieneNumero && tieneMayuscula) {
    console.log("Password válida");
} else {
    console.log("Password inválida");
}
}


validarPassword("Chechoboca9");
validarPassword("Juanseronaldo");