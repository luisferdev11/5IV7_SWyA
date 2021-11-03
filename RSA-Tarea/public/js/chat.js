const socket = io();

let message = document.getElementById("message");
let username = document.getElementById("username");
let btn = document.getElementById("send");
let output = document.getElementById("output");
let descifrado = document.getElementById("descifrado") || 3;

btn.addEventListener("click", () => {
    console.log(message.value, username.value);
    socket.emit("message", {
        message: cifrar(message.value),
        username: username.value,
    });
});

socket.on("message", (data) => {
    output.innerHTML += `<p>
        <strong>${data.username}</strong>: ${data.message}
        <button id="descifrado">Descifrar</button>
    </p>
    `;
});

function cifrar(x) {
    return x * 2;
}

function descifrar(x) {
    return x / 2;
}
