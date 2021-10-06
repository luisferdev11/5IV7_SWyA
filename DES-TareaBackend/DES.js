const crypto = require('crypto');
const fs = require('fs');

const config = {
    cryptkey: "5TGB&YHN7UJM(IK<5TGB&YHN",//24
    iv: "!QAZ2WSX"//8
};

const text = fs.readFileSync('./files/texto.txt', 'utf8');


function encryptText(text){
    //console.log(config.cryptkey);
    const cipher = crypto.createCipheriv('des-ede3-cbc', config.cryptkey, config.iv);

    const input = fs.createReadStream('./files/texto.txt');
    const output = fs.createWriteStream('./files/texto.txt.cifrado');

    input.pipe(cipher).pipe(output);
}

function decryptText(text){
    // que sea texto válido
    if (text === null || typeof text === 'undefined' || text === '') {return text;};
    text = new Buffer.from(text, 'base64');
    const decipher = crypto.createDecipheriv('des-ede3-cbc', config.cryptkey, config.iv);
    let dec = decipher.update(text,'binary','utf8');
    dec += decipher.final('utf8');
    return dec;
}


encryptText(text);


// fs.createReadStream('./files/texto.txt').pipe(fs.createWriteStream('./files/texto.txt.cifrado'));   //encryptText(text);

//encriptamos
// const encriptado = encryptText(text);
// console.log("enc: " + encriptado);
// fs.writeFileSync('./files/texto.txt.cifrado', encriptado);
//console.log("Enc: " + encriptado);

// const desencriptado = decryptText(encriptado);
// console.log("Dec: " + desencriptado);