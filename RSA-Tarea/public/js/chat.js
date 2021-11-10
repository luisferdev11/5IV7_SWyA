const socket = io();

let message = document.getElementById("message");
let username = document.getElementById("username");
let btn = document.getElementById("send");
let output = document.getElementById("output");

btn.addEventListener("click", () => {
    socket.emit("message", {
        original: message.value,
        message: generarClaves(message.value),
        username: username.value,
    });
});

socket.on("message", (data) => {
    output.innerHTML += `<p>
        <input readonly class="invisible" id="oculto2${data.username}${data.message}" value="${data.original}">
        <input readonly class="invisible" id="oculto${data.username}${data.message}" value="${data.message}">
        <strong>${data.username}</strong>: <input readonly id="cifrado${data.username}${data.message}" value="${data.message}">
        <button id="${data.username}${data.message}" onmousedown="descifrado(this.id)" onmouseup="mouseUp(this.id)">Descifrar</button>
    </p>
    `;
});

function descifrado(id) {
    let msg = document.getElementById(`cifrado${id}`);

    var original_Message = document.getElementById(`oculto2${id}`);

    msg.value = original_Message.value;

    console.log(original_Message);
}

function mouseUp(id) {
    let my_Msg = document.getElementById(`oculto${id}`);
    console.log(my_Msg.value);
    let msg = document.getElementById(`cifrado${id}`);
    msg.value = my_Msg.value;
}

//Definir los numeros grandotes
var tamprimo;
var p, q, n;
var fi;
var e, d;
var limite = 50; // 10 elevado a tamprimo
var j = 2;
var numerosPrimos = [];

for (; j < limite; j++) {
    if (primo(j)) {
        numerosPrimos.push(j);
    }
}

do p = numerosPrimos[Math.floor(Math.random() * numerosPrimos.length)];
while (p == q);
{
    q = numerosPrimos[Math.floor(Math.random() * numerosPrimos.length)];
}
n = p * q;
fi = p - 1;
fi *= q - 1;
do
    e = numerosPrimos[Math.floor(Math.random() * numerosPrimos.length)]; // considerar tamprimo
while (fi < e || maximoComunDivisor(e, fi) != 1);
d = modInverse(fi, e);

function RSA(tamprimo) {
    this.tamprimo = tamprimo;
}
//generar los numeros primos
function generarPrimos() {
    do p = numerosPrimos[Math.floor(Math.random() * numerosPrimos.length)];
    while (p == q);
    {
        q = numerosPrimos[Math.floor(Math.random() * numerosPrimos.length)];
    }
    return p, q;
}

function primo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero !== 1;
}

function maximoComunDivisor(a, b) {
    let temporal;
    while (b !== 0) {
        temporal = b;
        b = a % b;
        a = temporal;
    }
    return a;
}

function generarClaves(numero) {
    var respuesta = cifrar(numero, e, n);
    return respuesta;
}

function correrDesifrado() {
    generarPrimos();
    generarClaves();
    cifrar(prueba, e, n);
}

function modInverse(a, m) {
    a = ((a % m) + m) % m;
    // find the gcd
    const s = [];
    let b = m;
    while (b) {
        [a, b] = [b, a % b];
        s.push({ a, b });
    }
    // find the inverse
    let x = 1;
    let y = 0;
    for (let i = s.length - 2; i >= 0; --i) {
        [x, y] = [y, x - y * Math.floor(s[i].a / s[i].b)];
    }
    return ((y % m) + m) % m;
}
//p y q
//17 y 2
// 1;26;23
//12623
//123
//1;32;5
//1325
function cifrar(mensaje, e, n) {
    var i = 0;
    var respuesta = "";
    for (i; i < mensaje.length; i++) {
        var char = mensaje.charAt(i);
        var caf = parseInt(char, 10);
        var x = modPow(caf, e, n);
        respuesta += x.toString();
    }
    return respuesta;
}
//mod pow
function modPow(c, exponent, module) {
    //x.modPow(exponent, module)
    //n ^ exponent % module
    /*Donde n y el modulo no son primos relativos*/
    // e, n
    var x = Math.pow(c, exponent);
    x %= module;
    return x;
}

function descifrar(mensaje, e, n) {
    var i = 0;
    var respuesta = mensaje.split(";");
    var mensajeDescifrado = "";
    for (i; i < prueba.value.length; i++) {
        var de = respuesta[i];
        var caf = parseInt(de, 10);
        var x = modPow(caf, e, n);
        mensajeDescifrado += x.toString();
    }
    console.log("Descifrado = " + mensajeDescifrado);
    return mensajeDescifrado;
}

function Hacerdescifrado() {
    var mensaje = generarClaves();
    descifrar(mensaje, d, n);
}
