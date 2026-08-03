require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const http = require("http");

const { engine } = require("express-handlebars");
const { Server } = require("socket.io");

const connectDB = require("./config/db");
const productsRoutes = require("./routes/productsRoutes");
const cartsRoutes = require("./routes/cartsRoutes");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 8080;

// Conectar MongoDB
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("🚀 API de GalleMas funcionando");
});

// API
app.use("/api/products", productsRoutes);
app.use("/api/carts", cartsRoutes);

// Iniciar servidor
server.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});   