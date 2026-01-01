const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: "http://localhost:5173/",
});

const allUsers = [];

io.on("connection", (socket) => {
    allUsers.push(socket);
    socket.on("disconnect", function() {
        
    });
});

httpServer.listen(3000);