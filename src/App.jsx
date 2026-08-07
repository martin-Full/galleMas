import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;