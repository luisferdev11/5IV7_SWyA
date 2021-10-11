const express = require("express");
const fileUpload = require("express-fileupload");
const fs = require("fs");

const DES = require("./DES");

const app = express();

app.use(fileUpload());
app.use(express.static("public"));

app.post("/encriptar", (req, res) => {
    try {
        const nombreArchivo = "mensajeEncriptado.txt";
        const inputContenido = req.files.contenido.data.toString();
        const inputPassword = req.body.Password;

        //la librería solo contine un triple DES, para tener un DES normalito se repite la clave 3 veces
        const encripted = Buffer.from(
            DES.encryptText(
                inputContenido,
                `${inputPassword}${inputPassword}${inputPassword}`
            )
        ).toString();

        fs.writeFileSync(`./files/${nombreArchivo}`, "" + encripted);

        res.download(`./files/${nombreArchivo}`);
    } catch (error) {
        res.redirect("/");
    }
});

app.post("/desencriptar", function (req, res) {
    try {
        const nombreArchivo = "mensajeDesencriptado.txt";
        const inputContenido = req.files.contenido.data.toString();
        const inputPassword = req.body.Password;

        //misma explicacion
        const desencripted = Buffer.from(
            DES.decryptText(
                inputContenido,
                `${inputPassword}${inputPassword}${inputPassword}`
            )
        ).toString();

        fs.writeFileSync(`./files/${nombreArchivo}`, "" + desencripted);

        res.download(`./files/${nombreArchivo}`);
    } catch (error) {
        res.redirect("/");
    }
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
