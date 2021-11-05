const socket = io();

const index_Message = [];

let message = document.getElementById("message");
let username = document.getElementById("username");
let btn = document.getElementById("send");
let output = document.getElementById("output");

btn.addEventListener("click", () => {
    socket.emit("message", {
        message: cifrar(message.value),
        username: username.value,
    });
});

socket.on("message", (data) => {
    output.innerHTML += `<p>
        <strong>${data.username}</strong>: <input readonly id="cifrado${data.username}${data.message}" value="${data.message}">
        <button id="${data.username}${data.message}" onclick="descifrado(this.id)">Descifrar</button>
    </p>
    `;
});

function cifrar(x) {
    return x * 2;
}

function descifrar(x) {
    return x / 2;
}

function descifrado(id) {
    let msg = document.getElementById(`cifrado${id}`);
    console.log(descifrar(parseInt(msg.value)));
    msg.value = descifrar(parseInt(msg.value));
}
