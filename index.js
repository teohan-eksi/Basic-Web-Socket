


const http = require("http");
const webSocketServer = require("websocket").server;

const httpServer = http.createServer((request, response) =>{
  console.log("request received.")
});

httpServer.listen(8080, ()=>{
  console.log("Listening on port 8080");
});
