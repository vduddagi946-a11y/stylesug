import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import Link from 'next/link'
export default function Cart(){
  const { items, updateQty, remove, clear } = useCart()
  const total = items.reduce((s,it)=> s + Number(it.price||0) * it.qty, 0)
  return (
    <>
      <Nav/>
      <main className="container" style={{padding:40}}>
        <h1>Your cart</h1>
        {items.length===0? <div className="small">Your cart is empty. <Link href="/shop"><a>Shop now</a></Link></div> : (
          <>
            <ul>{items.map(it=>(
              <li key={it.id} style={{display:'flex',justifyContent:'space-between',padding:'8px 0'}}>
                <div><b>{it.title}</b><div className="small">₹{it.price} x {it.qty}</div></div>
                <div>
                  <button onClick={()=> updateQty(it.id, Math.max(1, it.qty-1))}>-</button>
                  <span style={{margin:'0 8px'}}>{it.qty}</span>
                  <button onClick={()=> updateQty(it.id, it.qty+1)}>+</button>
                  <button onClick={()=> remove(it.id)}>Remove</button>
                </div>
              </li>
            ))}</ul>
            <div style={{marginTop:16,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <div><b>Total: ₹{total}</b></div>
              <div><button className="btn" onClick={clear} style={{marginRight:8}}>Clear</button><button className="primary-cta" onClick={()=> alert('Checkout not configured')}>Checkout</button></div>
            </div>
          </>
        )}
      </main>
      <Footer/>
    </>
  )
}
