import Link from 'next/link';
import { useCart } from '../context/CartContext';
export default function Header(){ const { items } = useCart(); const count =
items.reduce((s,it)=>s+it.qty,0);
  return (<header className="header"><div className="container" 
style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}><div 
style={{display:'flex',alignItems:'center',gap:12}}><Link href="/"><a 
style={{display:'flex',alignItems:'center'}}><img src="/logo.svg" alt="StyleSUG" 
className="logo-img" /></a></Link><nav className="small" style={{marginLeft:12}}><Link 
href="/shop"><a style={{marginRight:12}}>Shop</a></Link></nav></div><div 
style={{display:'flex',alignItems:'center',gap:12}}><Link href="/cart"><a 
className="btn">Cart</a></Link>{count>0 && <span className="small">Items: 
{count}</span>}</div></div></header>)
}
