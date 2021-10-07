let arrayNombre, longitud, extension, validacion;
const regexTxt = ".txt";

function validarCifrado(event){
    validacion = true;
    // Validar que no haya campos vacios
    if(contenido.value == ""){
        alert("Necesitas añadir un archivo para cifrar");
        validacion = false;
    }
    // Validar extension
    if(validacion == true){
        validarExtension(contenido);
    }
    if(validacion == false){
        // Detiene la accion asociada al evento, por ejemplo
        // si al ser pulsado debia de enviar los datos al servidor
        // cancela esa operacion
        event.preventDefault();
    }
}

function validarDescifrado(event){
    validacion = true;
    // Validar que no haya campos vacios
    if(contenido.value == "" || clave.value == ""){
        alert("Para descifrar necesitas clave y contenido");
        validacion = false;
    }
    // Validar extension
    if(validacion == true){
        validarExtension(contenido);
    }
    if(validacion == true){
        validarExtension(clave);
    }
    if(validacion == false){
        // Detiene la accion asociada al evento, por ejemplo
        // si al ser pulsado debia de enviar los datos al servidor
        // cancela esa operacion
        event.preventDefault();
    }
}

function validarExtension(file){
    longitud = file.value.length;
    // Divide el nombre del archivo en un array y devuelve las ultimas 4 letras
    // si las letras son .txt lo acepta, sino no
    arrayNombre = file.value.split("");
    extension = arrayNombre[longitud-4] + arrayNombre[longitud-3] + arrayNombre[longitud-2] + arrayNombre[longitud-1];
    if(regexTxt != extension){
        alert("Solo puedes subir archivos txt");
        validacion = false;
    }
}// JavaScript Document