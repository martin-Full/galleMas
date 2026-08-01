import Hero from '../componentes/Hero/Hero'
import Products from '../componentes/Products/Products'

function Home() {
  const handleShopClick = () => {
    const productsSection = document.getElementById('productos')

    productsSection?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <>
      <Hero onShopClick={handleShopClick} />
      <Products />
    </>
  )
}

export default Home