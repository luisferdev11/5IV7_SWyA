const formulario = document.getElementById("formulario");

function cifrar(event){
    formulario.setAttribute("action", "/encriptar");
}

function descifrar(event){
    formulario.setAttribute("action", "/desencriptar");
}