const crypto = require("crypto");

const config = {
    iv: "!QAZ2WSX", //8
};

function encryptText(text, key) {
    //console.log(key);
    const cipher = crypto.createCipheriv("des-ede3-cbc", key, config.iv);
    let crypted = cipher.update(text, "utf8", "binary");
    crypted += cipher.final("binary");
    crypted = new Buffer.from(crypted, "binary").toString("base64");
    return crypted;
}

function decryptText(text, key) {
    // que sea texto válido
    if (text === null || typeof text === "undefined" || text === "") {
        return text;
    }
    text = new Buffer.from(text, "base64").toString("binary");
    const decipher = crypto.createDecipheriv("des-ede3-cbc", key, config.iv);
    let dec = decipher.update(text, "binary", "utf8");
    dec += decipher.final("utf8");
    return dec;
}

module.exports = { encryptText, decryptText };
