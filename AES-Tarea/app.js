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
