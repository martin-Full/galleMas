require("dotenv").config();
const connectDB = require("./config/db");
const cartsRoutes = require("./routes/cartsRoutes");
const express = require("express");
const cors = require("cors");
const productsRoutes = require("./routes/productsRoutes");
const app = express();
const PORT = 8080;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("🚀 API de GalleMas funcionando");
});

// Rutas de productos
app.use("/api/products", productsRoutes);
app.use("/api/carts", cartsRoutes);
//Contecta MongoDB
connectDB();
// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});
