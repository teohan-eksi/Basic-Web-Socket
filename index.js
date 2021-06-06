


const http = require("http");
const WebSocketServer = require("websocket").server;

let connection = null;
let i = 0;
let durationInterval = null;

const httpServer = http.createServer((request, response) =>{
  console.log("request received.")
});

const webSocket = new WebSocketServer({
  "httpServer": httpServer
});

webSocket.on("request", request=>{
  console.log("webSocket on request");

  clearInterval(durationInterval);
  i = 0;

  connection = request.accept(null, request.origin);

  connection.on("message", message => {
    console.log(message.utf8Data);
  });

  //sending message to the client
  connection.send("message from server");

  //show connection duration in the client.
  connDur();
});

httpServer.listen(8080, ()=>{
  console.log("Listening on port 8080");
});

function connDur(){
  connection.send(i);
  durationInterval = setTimeout(()=>{
    i++;
    connDur();
  }, 1000);
}
