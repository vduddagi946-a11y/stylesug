import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProductGrid from '../components/ProductGrid'

export default function Shop(){
  return (
    <>
      <Nav />
      <main className="container" style={{padding: '40px 24px'}}>
        <h1 style={{fontSize:22}}>Shop</h1>
        <ProductGrid />
      </main>
      <Footer />
    </>
  )
}
