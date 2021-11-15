const crypto = require("crypto");
const fs = require("fs");
const express = require("express");
const router = express.Router();
const path = require("path");
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");
const FileController = require("./controllers/FileController");
const app = express();
const fileController = new FileController();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileupload());

router.post("/subir-archivo", fileController.subirArchivo);

router.use(function (req, res) {
    res.status(404).json({
        error: true,
        message: "Not Found",
    });
});

app.use("/api", router);

app.use(express.static(__dirname));

app.get("/", function (req, res) {
    res.render("index.html");
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("Server", process.pid, "listening on port", port);
});

module.exports = app;
app.post("/cifrar", (req, res) => {
    const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: "spki",
            format: "der",
        },
        privateKeyEncoding: {
            type: "pkcs8",
            format: "der",
        },
    });

    //let privateKey = privateKey.toString('base64');
    console.log("llave publica: " + publicKey.toString("base64"));
    console.log("llave privada: " + privateKey.toString("base64"));

    Contenido = req.files.subir_archivo.name;
    archivo = __dirname + "/uploads/" + Contenido;
    mensaje = fs.readFileSync(archivo, "utf8");
    console.log("El contenido del txt es: " + mensaje);

    LlavePrivada = crypto.createPrivateKey({
        key: Buffer.from(privateKey, "base64"),
        type: "pkcs8",
        format: "der",
    });

    const signer = crypto.createSign("sha256");
    signer.update(mensaje);
    signer.end();
    const signature = signer.sign(LlavePrivada, "base64");
    console.log("La firma es: " + signature);

    fs.writeFileSync(
        __dirname + "/uploads/" + Contenido,
        mensaje +
            "\n" +
            "" +
            "Firma digital: " +
            signature +
            "\n" +
            "Clave Pública: " +
            publicKey.toString("base64")
    );

    res.download(__dirname + "/uploads/" + Contenido);
});
app.post("/descifrar", (req, res) => {
    let publicKey = "";
    let firma = "";
    let Contenido = "";
    Contenido = req.files.subir_archivo.name;

    const Contenido2 = Contenido.slice(0, -4);
    publicKey = req.body.Password;
    firma = req.body.Password2;
    console.log("la llave es: " + publicKey);
    console.log("la firma es: " + firma);

    let archivo, mensaje;
    archivo = __dirname + "/uploads/" + Contenido;
    mensaje = fs.readFileSync(archivo, "utf8");
    console.log("El contenido del txt es: ");
    console.log(mensaje);
    console.log("");

    llavePublica = crypto.createPublicKey({
        key: Buffer.from(publicKey, "base64"),
        type: "spki",
        format: "der",
    });

    const verify = crypto.createVerify("sha256");
    verify.update(mensaje);
    verify.end();

    let result = verify.verify(llavePublica, Buffer.from(firma, "base64"));

    if (result === false) {
        fs.writeFileSync(
            __dirname + "/uploads/" + Contenido2 + "Falso(1).txt",
            "Su documento está alterado, consulte la firma digital, la llave pública o el contenido del documento"
        );

        res.download(__dirname + "/uploads/" + Contenido2 + "Falso(1).txt");
    } else {
        fs.writeFileSync(
            __dirname + "/uploads/" + Contenido2 + "Verdadero(1).txt",
            "El documento no a sido modificado"
        );

        res.download(__dirname + "/uploads/" + Contenido2 + "Verdadero(1).txt");
    }
});
app.post("/index", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});
