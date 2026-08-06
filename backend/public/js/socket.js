const socket = io();

console.log("✅ Socket cargado");

socket.on("connect", () => {
  console.log("🟢 Conectado:", socket.id);
});

socket.onAny((event, data) => {
  console.log("📡 Evento:", event, data);
});

socket.on("productsUpdated", (products) => {
  console.log("🔥 productsUpdated recibido", products);
  location.reload();
});