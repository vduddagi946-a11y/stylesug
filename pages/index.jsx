import Head from 'next/head'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import ProductGrid from '../components/ProductGrid'
import Footer from '../components/Footer'
export default function Home(){
  return (
    <>
      <Head><title>StyleSUG — Accessories</title></Head>
      <Nav />
      <Hero />
      <main className="container" style={{padding:'40px 24px'}}>
        <h2 style={{fontSize:22}}>Accessories — Premium Picks</h2>
        <ProductGrid />
      </main>
      <Footer />
    </>
  )
}
