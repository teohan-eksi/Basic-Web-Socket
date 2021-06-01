


console.log("client.js runs");

let ws = new WebSocket("ws://localhost:8080");

ws.onmessage = message => console.log("message: " + message.data);

//sending message to the server
//ws.send("message from client");
