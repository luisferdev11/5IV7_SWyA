const socket = io();

let message = document.getElementById("message");
let username = document.getElementById("username");
let btn = document.getElementById("send");
let output = document.getElementById("output");
let actions = document.getElementById("actions");

btn.addEventListener("click", () => {
    console.log(message.value, username.value);
    socket.emit("message", {
        message: message.value,
        username: username.value,
    });
});

socket.on("message", (data) => {
    output.innerHTML += `<p>
        <strong>${data.username}</strong>: ${data.message}
    </p>`;
});
