import Link from 'next/link'
import { useCart } from '../context/CartContext'
export default function Nav(){
  const { items } = useCart()
  const count = items.reduce((s,i)=> s + i.qty, 0)
  return (
    <nav className="nav">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{fontWeight:800,fontSize:20}}>StyleSUG</div>
        <div style={{display:'flex',gap:18,alignItems:'center'}}>
          <Link href="/"><a>Home</a></Link>
          <Link href="/shop"><a>Shop</a></Link>
          <Link href="/cart"><a className="btn">Cart ({count})</a></Link>
        </div>
      </div>
    </nav>
  )
}
