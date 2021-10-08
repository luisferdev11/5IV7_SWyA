

var mensaje = "habia una vez otro patito que queria mimir, y chocolates wiiii";

var password = "qwertyuiqwertyuid";


var cifrado = CryptoJS.AES.encrypt(mensaje, password);

var descifrado = CryptoJS.AES.decrypt(cifrado, password);

//y ya acabe ufff como me cance :3

document.getElementById("demo00").innerHTML = mensaje;
document.getElementById("demo01").innerHTML = cifrado;
document.getElementById("demo02").innerHTML = descifrado;
document.getElementById("demo03").innerHTML = descifrado.toString(CryptoJS.enc.Utf8);