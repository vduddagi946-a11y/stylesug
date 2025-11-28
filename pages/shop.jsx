import Header from '../components/Header'; import Footer from '../components/Footer'; 
import ProductGrid from '../components/ProductGrid'; import {useEffect,useState} from 
'react';
export default function Shop(){ const [products,setProducts]=useState([]); const 
[loading,setLoading]=useState(true);
  useEffect(()=>{ async function load(){ setLoading(true); try{ const res=await 
fetch('/api/products'); const j=await res.json(); setProducts(j.products||[]); }catch(e){} finally{ 
setLoading(false);} } load(); },[]);
  return (<div><Header/><main className="container"><h1 
style={{fontSize:22}}>Shop</h1>{loading? <div>Loading...</div>: <ProductGrid 
products={products}/> }</main><Footer/></div>)
}
