import { Route, Routes } from 'react-router-dom'
import Navbar from './componentes/Navbar/Navbar'
import Home from './pages/Home'
import Checkout from './pages/Checkout'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />
      </Routes>
    </>
  )
}

export default App