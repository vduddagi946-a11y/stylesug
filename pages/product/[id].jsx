import { useRouter } from 'next/router'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import products from '../../data/products.json'
import { useCart } from '../../context/CartContext'
export default function ProductPage(){
  const { query } = useRouter()
  const id = String(query.id)
  const product = products.find(p => String(p.id) === id)
  const { add } = useCart()
  if(!product){
    return (<><Nav/><main className="container" style={{padding:40}}>Product not found</main><Footer/></>)
  }
  function onAdd(){ add({ id: product.id, title: product.title, price: product.price, qty:1 }); alert('Added to cart') }
  return (
    <>
      <Nav/>
      <main className="container" style={{padding:40, display:'grid', gridTemplateColumns:'1fr 1fr', gap:24}}>
        <div><img src={product.image} style={{width:'100%',borderRadius:12}} alt={product.title} /></div>
        <div>
          <h1>{product.title}</h1>
          <div className="price">₹{product.price}</div>
          <p className="small">{product.description}</p>
          <div style={{marginTop:12}}><button className="primary-cta" onClick={onAdd}>Add to cart</button></div>
        </div>
      </main>
      <Footer/>
    </>
  )
}
