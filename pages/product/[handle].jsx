import Header from '../../components/Header'; import Footer from '../../components/Footer'; 
import {useRouter} from 'next/router'; import {useEffect,useState} from 'react'; import 
{useCart} from '../../context/CartContext';
export default function ProductPage(){ const {query} = useRouter(); const handle = 
query.handle; const [product,setProduct]=useState(null); const {add}=useCart();
  useEffect(()=>{ if(!handle) return; async function load(){ const res=await 
fetch('/api/products?handle='+handle); const j=await res.json(); setProduct(j.product||null);} 
load(); },[handle]);
  if(!product) return <div><Header/><main 
className="container">Loading...</main><Footer/></div>;
  function onAdd(){ const variant = product.variants?.[0]||{id:product.id}; add({id:product.id, 
variantId:variant.id, title:product.title, price:product.price, qty:1}); alert('Added to cart'); }
  return (<div><Header/><main className="container" 
style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}><div><img 
src={product.images?.[0]} style={{width:'100%',borderRadius:12}} 
alt={product.title}/></div><div><h1 style={{fontSize:20}}>{product.title}</h1><div 
className="price">₹{product.price}</div><p 
className="small">{product.description}</p><div style={{marginTop:12}}><button 
className="primary-cta" onClick={onAdd}>Add to 
cart</button></div></div></main><Footer/></div>)
}
