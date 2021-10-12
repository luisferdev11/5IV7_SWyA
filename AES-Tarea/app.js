import express from "express";
import CryptoJS from "crypto-js";
import * as fs from "fs";
import fileupload from "express-fileupload";

const app = express();

app.use(fileupload());
app.use(express.static("public"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.post("/encriptar", (req, res) => {
    const nombreArchivo = "mensajeEncriptado.txt";
    const inputContenido = req.files.contenido.data.toString();
    const inputClave = req.body.Password;

    const encriptado = Buffer.from(
        CryptoJS.AES.encrypt(inputContenido, inputClave).toString()
    );

    fs.writeFileSync(`./files/${nombreArchivo}`, encriptado);
    res.download(`./files/${nombreArchivo}`);
});

app.post("/desencriptar", function (req, res) {
    const nombreArchivo = "mensajeDesencriptado.txt";
    const inputContenido = req.files.contenido.data.toString();
    const inputClave = req.body.Password;

    const desencriptado = Buffer.from(
        CryptoJS.AES.decrypt(inputContenido.toString(), inputClave).toString(
            CryptoJS.enc.Utf8
        )
    );

    fs.writeFileSync(`./files/${nombreArchivo}`, desencriptado);
    res.download(`./files/${nombreArchivo}`);
});
