const express = require('express');
const fileUpload = require('express-fileupload');
const fs = require('fs');

const DES = require("./DES");

const app = express();

app.use(fileUpload());
app.use(express.static('public'));

app.post('/encriptar',(req,res) => {
    const nombreArchivo = "mensajeEncriptado.txt";
    const inputContenido = req.files.contenido.data.toString();
    const encripted = Buffer.from(DES.encryptText(inputContenido)).toString();
    console.log(""+encripted);
    
    fs.writeFileSync(`./files/${nombreArchivo}`, ""+encripted);
    
    res.download(`./files/${nombreArchivo}`);
});

app.post('/desencriptar', function(req, res){
    const nombreArchivo = "mensajeDesencriptado.txt";
    const inputContenido = req.files.contenido.data.toString();
    console.log(inputContenido);
    const desencripted = Buffer.from(DES.decryptText(inputContenido)).toString();
    console.log(""+desencripted);
    
    fs.writeFileSync(`./files/${nombreArchivo}`, ""+desencripted);
    
    res.download(`./files/${nombreArchivo}`);
});

app.listen(3000,() => console.log('Corriendo'));