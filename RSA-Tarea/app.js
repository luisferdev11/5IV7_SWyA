const express = require("express");

const app = express();

app.use(express.static("public"));

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const socket = require("socket.io");
const io = socket(server);

io.on("connection", (socket) => {
    console.log("new connection", socket.id);

    socket.on("message", (data) => {
        console.log(data);
        io.sockets.emit("message", data);
    });
});
