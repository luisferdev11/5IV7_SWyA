// Variables

// Obtiene el <input type="file">
const contenido = document.getElementById("contenido");
const clave = document.getElementById("clave");
// Obtiene el <p> donde se mostrara el nombre del archivo
let outputContenido = document.getElementById("name-contenido");
let outputClave = document.getElementById("name-clave");
let archivo;
// Busca el caracter \
const regex = '\\';

// Cuando subes un archivo al <input type="file"> llama la funcion mostrarNombreX()
contenido.addEventListener("input", mostrarNombreContenido);
clave.addEventListener("input", mostrarNombreClave);

function mostrarNombreContenido() {
    // Obtiene el nombre del archivo que subiste
    archivo = contenido.value;
    // Por motivos que desconozco obtiene el nombre como 
    // C:\fakepath\prueba.txt
    archivo = archivo.split(regex);
    // Separa el nombre segun las diagonales invertidas
    archivo = archivo[archivo.length - 1];
    // Muestra el nombre del archivo
    outputContenido.innerHTML = archivo;
}

function mostrarNombreClave() {
    // Obtiene el nombre del archivo que subiste
    archivo = clave.value;
    // Por motivos que desconozco obtiene el nombre como 
    // C:\fakepath\prueba.txt
    archivo = archivo.split(regex);
    // Separa el nombre segun las diagonales invertidas
    archivo = archivo[archivo.length - 1];
    // Muestra el nombre del archivo
    outputClave.innerHTML = archivo;
}// JavaScript Document