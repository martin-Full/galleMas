import { Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logoGallemas from '../../assets/logo-gallemas.png'
import { useCart } from '../../context/CartContext'
import CartDrawer from '../CartDrawer/CartDrawer'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  const { cartQuantity } = useCart()
  const navigate = useNavigate()

  const handleProductsClick = () => {
    setMenuOpen(false)

    navigate('/')

    setTimeout(() => {
      const productsSection = document.getElementById('productos')

      productsSection?.scrollIntoView({
        behavior: 'smooth',
      })
    }, 100)
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#4A2105]/10 bg-[#FBF6EF]/95 backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <img
              src={logoGallemas}
              alt="GalleMas"
              className="h-14 w-14 rounded-full object-contain"
            />

            <span className="text-2xl font-bold text-[#4A2105]">
              Galle<span className="text-[#C5573F]">Mas</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 lg:flex">
            <Link
              to="/"
              className="font-medium text-[#2D211B] transition hover:text-[#C5573F]"
            >
              Inicio
            </Link>

            <button
              type="button"
              onClick={handleProductsClick}
              className="font-medium text-[#2D211B] transition hover:text-[#C5573F]"
            >
              Productos
            </button>

            <a
              href="#nosotros"
              className="font-medium text-[#2D211B] transition hover:text-[#C5573F]"
            >
              Nosotros
            </a>

            <a
              href="#como-comprar"
              className="font-medium text-[#2D211B] transition hover:text-[#C5573F]"
            >
              Cómo comprar
            </a>

            <a
              href="#contacto"
              className="font-medium text-[#2D211B] transition hover:text-[#C5573F]"
            >
              Contacto
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Buscar productos"
              className="rounded-full p-3 text-[#4A2105] transition hover:bg-[#F3E6D6]"
            >
              <Search size={21} />
            </button>

            <button
              type="button"
              onClick={() => setCartOpen(true)}
              aria-label="Abrir carrito"
              className="relative rounded-full bg-[#4A2105] p-3 text-white transition hover:scale-105"
            >
              <ShoppingBag size={21} />

              {cartQuantity > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#C5573F] px-1 text-xs font-bold text-white">
                  {cartQuantity}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() =>
                setMenuOpen((prevMenuOpen) => !prevMenuOpen)
              }
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              className="rounded-full p-3 text-[#4A2105] transition hover:bg-[#F3E6D6] lg:hidden"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="border-t border-[#4A2105]/10 bg-[#FBF6EF] px-5 py-6 lg:hidden">
            <div className="flex flex-col gap-5">
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="font-medium text-[#2D211B]"
              >
                Inicio
              </Link>

              <button
                type="button"
                onClick={handleProductsClick}
                className="text-left font-medium text-[#2D211B]"
              >
                Productos
              </button>

              <a
                href="#nosotros"
                onClick={() => setMenuOpen(false)}
                className="font-medium text-[#2D211B]"
              >
                Nosotros
              </a>

              <a
                href="#como-comprar"
                onClick={() => setMenuOpen(false)}
                className="font-medium text-[#2D211B]"
              >
                Cómo comprar
              </a>

              <a
                href="#contacto"
                onClick={() => setMenuOpen(false)}
                className="font-medium text-[#2D211B]"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </header>

      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
      />
    </>
  )
}

export default Navbar