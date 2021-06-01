

console.log("index.js runs");

const http = require("http");
const WebSocketServer = require("websocket").server;

let connection = null;

const httpServer = http.createServer((request, response) =>{
  console.log("request received.")
});

const webSocket = new WebSocketServer({
  "httpServer": httpServer
});

webSocket.on("request", request=>{
  console.log("webSocket on request");

  connection = request.accept(null, request.origin);

  connection.on("onopen", () => {
    console.log("web socket connection opened.");
  });

  connection.on("message", message => {
    console.log(message.utf8Data);
  });

  //sending message to the client
  connection.send("message from server");

});

httpServer.listen(8080, ()=>{
  console.log("Listening on port 8080");
});
