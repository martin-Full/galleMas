import { ArrowRight, ShieldCheck, Truck } from 'lucide-react'
import logoGallemas from '../../assets/logo-gallemas.png'

function Hero({ onShopClick }) {
  return (
    <section className="relative overflow-hidden bg-[#FBF6EF]">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#C5573F]/10 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#4A2105]/10 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div className="text-center lg:text-left">
          <span className="inline-flex rounded-full border border-[#C5573F]/20 bg-white/70 px-4 py-2 text-sm font-semibold text-[#C5573F] shadow-sm">
            Galletitas de tus marcas favoritas
          </span>

          <h1 className="mt-6 text-5xl font-black leading-[1.05] tracking-tight text-[#4A2105] md:text-6xl lg:text-7xl">
            Tus galletitas
            <span className="block text-[#C5573F]">
              favoritas al mejor precio
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#2D211B]/70 lg:mx-0">
            Encontrá variedades dulces, saladas y light. Comprá de forma
            simple y recibí tu pedido en nuestra zona de entrega.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <button
              type="button"
              onClick={onShopClick}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#C5573F] px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#AD4936] hover:shadow-xl sm:w-auto"
            >
              Comprar ahora
              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </button>

            <a
              href="#productos"
              className="w-full rounded-full border border-[#4A2105]/20 bg-white px-7 py-4 text-center font-bold text-[#4A2105] transition hover:bg-[#F3E6D6] sm:w-auto"
            >
              Ver productos
            </a>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 text-sm text-[#2D211B]/70 sm:flex-row sm:justify-center lg:justify-start">
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-[#C5573F]" />
              <span>Compra segura</span>
            </div>

            <div className="flex items-center gap-2">
              <Truck size={20} className="text-[#C5573F]" />
              <span>Envíos en nuestra zona</span>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-80 w-80 rounded-full bg-[#C5573F]/10 blur-2xl md:h-[28rem] md:w-[28rem]" />

          <div className="relative rounded-[3rem] border border-white/70 bg-white/50 p-8 shadow-2xl backdrop-blur-sm">
            <img
              src={logoGallemas}
              alt="GalleMas"
              className="h-72 w-72 object-contain md:h-[26rem] md:w-[26rem]"
            />

            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#2D211B]/50">
                Variedades
              </p>

              <p className="mt-1 font-bold text-[#4A2105]">
                Dulces · Saladas · Light
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero