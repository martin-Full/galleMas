import { ArrowLeft, MapPin, ShoppingBag, Truck } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const initialFormData = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  postalCode: '',
  notes: '',
  deliveryMethod: 'delivery',
}

function Checkout() {
  const navigate = useNavigate()
  const { cart, cartTotal } = useCart()

  const [formData, setFormData] = useState(initialFormData)

  const handleGoBack = () => {
    navigate('/')
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const orderData = {
      customer: formData,
      items: cart,
      subtotal: cartTotal,
    }

    console.log('Pedido GalleMas:', orderData)
  }

  if (cart.length === 0) {
    return (
      <main className="min-h-screen bg-[#FBF6EF] px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <button
            type="button"
            onClick={handleGoBack}
            className="flex items-center gap-2 font-semibold text-[#4A2105] transition hover:text-[#C5573F]"
          >
            <ArrowLeft size={20} />
            Seguir comprando
          </button>

          <div className="mt-10 flex flex-col items-center rounded-[2rem] bg-white p-12 text-center shadow-sm">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F3E6D6] text-[#C5573F]">
              <ShoppingBag size={34} />
            </div>

            <h1 className="mt-6 text-2xl font-black text-[#4A2105]">
              Tu carrito está vacío
            </h1>

            <p className="mt-3 text-[#2D211B]/60">
              Agregá algunas galletitas antes de finalizar tu compra.
            </p>

            <button
              type="button"
              onClick={handleGoBack}
              className="mt-6 rounded-full bg-[#C5573F] px-7 py-4 font-bold text-white transition hover:bg-[#AD4936]"
            >
              Ver productos
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#FBF6EF] px-5 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <button
          type="button"
          onClick={handleGoBack}
          className="flex items-center gap-2 font-semibold text-[#4A2105] transition hover:text-[#C5573F]"
        >
          <ArrowLeft size={20} />
          Seguir comprando
        </button>

        <div className="mt-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C5573F]">
            Finalizar compra
          </p>

          <h1 className="mt-3 text-4xl font-black text-[#4A2105] md:text-5xl">
            Completá tu pedido
          </h1>

          <p className="mt-4 text-[#2D211B]/65">
            Ingresá tus datos para coordinar la entrega de tu compra.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_420px]">
          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-white p-6 shadow-sm md:p-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F3E6D6] text-[#C5573F]">
                <MapPin size={22} />
              </div>

              <div>
                <h2 className="text-xl font-black text-[#4A2105]">
                  Datos de entrega
                </h2>

                <p className="text-sm text-[#2D211B]/60">
                  Usaremos estos datos para coordinar tu pedido.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-[#4A2105]">
                  Nombre
                </span>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="given-name"
                  className="mt-2 w-full rounded-2xl border border-[#4A2105]/15 bg-[#FBF6EF]/50 px-4 py-3 outline-none transition focus:border-[#C5573F] focus:ring-4 focus:ring-[#C5573F]/10"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#4A2105]">
                  Apellido
                </span>

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  autoComplete="family-name"
                  className="mt-2 w-full rounded-2xl border border-[#4A2105]/15 bg-[#FBF6EF]/50 px-4 py-3 outline-none transition focus:border-[#C5573F] focus:ring-4 focus:ring-[#C5573F]/10"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#4A2105]">
                  Correo electrónico
                </span>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-2xl border border-[#4A2105]/15 bg-[#FBF6EF]/50 px-4 py-3 outline-none transition focus:border-[#C5573F] focus:ring-4 focus:ring-[#C5573F]/10"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#4A2105]">
                  Teléfono
                </span>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  className="mt-2 w-full rounded-2xl border border-[#4A2105]/15 bg-[#FBF6EF]/50 px-4 py-3 outline-none transition focus:border-[#C5573F] focus:ring-4 focus:ring-[#C5573F]/10"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="text-sm font-semibold text-[#4A2105]">
                  Dirección
                </span>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  autoComplete="street-address"
                  placeholder="Calle y número"
                  className="mt-2 w-full rounded-2xl border border-[#4A2105]/15 bg-[#FBF6EF]/50 px-4 py-3 outline-none transition focus:border-[#C5573F] focus:ring-4 focus:ring-[#C5573F]/10"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#4A2105]">
                  Localidad
                </span>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  autoComplete="address-level2"
                  className="mt-2 w-full rounded-2xl border border-[#4A2105]/15 bg-[#FBF6EF]/50 px-4 py-3 outline-none transition focus:border-[#C5573F] focus:ring-4 focus:ring-[#C5573F]/10"
                />
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-[#4A2105]">
                  Código postal
                </span>

                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
                  autoComplete="postal-code"
                  className="mt-2 w-full rounded-2xl border border-[#4A2105]/15 bg-[#FBF6EF]/50 px-4 py-3 outline-none transition focus:border-[#C5573F] focus:ring-4 focus:ring-[#C5573F]/10"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="text-sm font-semibold text-[#4A2105]">
                  Observaciones
                </span>

                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Ej: tocar timbre, dejar en portería..."
                  className="mt-2 w-full resize-none rounded-2xl border border-[#4A2105]/15 bg-[#FBF6EF]/50 px-4 py-3 outline-none transition focus:border-[#C5573F] focus:ring-4 focus:ring-[#C5573F]/10"
                />
              </label>
            </div>

            <div className="mt-8">
              <h3 className="font-black text-[#4A2105]">
                Método de entrega
              </h3>

              <label className="mt-4 flex cursor-pointer items-start gap-4 rounded-2xl border border-[#C5573F]/30 bg-[#C5573F]/5 p-5">
                <input
                  type="radio"
                  name="deliveryMethod"
                  value="delivery"
                  checked={formData.deliveryMethod === 'delivery'}
                  onChange={handleChange}
                  className="mt-1"
                />

                <Truck
                  size={22}
                  className="shrink-0 text-[#C5573F]"
                />

                <span>
                  <span className="block font-bold text-[#4A2105]">
                    Entrega a domicilio
                  </span>

                  <span className="mt-1 block text-sm text-[#2D211B]/60">
                    Confirmaremos disponibilidad y costo según tu ubicación.
                  </span>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-[#C5573F] px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#AD4936]"
            >
              Continuar con el pedido
            </button>
          </form>

          <aside className="rounded-[2rem] bg-white p-6 shadow-sm lg:sticky lg:top-28">
            <h2 className="text-xl font-black text-[#4A2105]">
              Tu pedido
            </h2>

            <div className="mt-6 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 border-b border-[#4A2105]/10 pb-4"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-[#F3E6D6]/60">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain p-1"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="font-bold text-[#4A2105]">
                      {item.name}
                    </p>

                    <p className="text-sm text-[#2D211B]/55">
                      Cantidad: {item.quantity}
                    </p>
                  </div>

                  <p className="font-bold text-[#C5573F]">
                    $
                    {(item.price * item.quantity).toLocaleString(
                      'es-AR',
                    )}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-[#2D211B]/60">
                Subtotal
              </span>

              <span className="text-2xl font-black text-[#4A2105]">
                ${cartTotal.toLocaleString('es-AR')}
              </span>
            </div>

            <div className="mt-4 rounded-2xl bg-[#FBF6EF] p-4">
              <p className="text-sm font-semibold text-[#4A2105]">
                Costo de envío pendiente
              </p>

              <p className="mt-1 text-xs leading-5 text-[#2D211B]/60">
                El costo y disponibilidad de la entrega se confirmarán según
                la dirección ingresada.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}


export default Checkout