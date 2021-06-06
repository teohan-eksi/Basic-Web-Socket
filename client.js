


console.log("client1 runs");

let ws = new WebSocket("ws://localhost:8080");

document.getElementById("client-btn").addEventListener("click", ()=>{
  //sending message to the server
  ws.send("message from client1");
});

let messageElem = document.getElementById("get-m");
ws.onmessage = (message) => {
  messageElem.innerHTML = "message: " + message.data;
};
