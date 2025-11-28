import React, { createContext, useContext, useEffect, useState } from 'react';
const CartContext = createContext();
export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  useEffect(()=>{ try{ const raw=localStorage.getItem('stylesug_cart'); if(raw) 
setItems(JSON.parse(raw)); }catch(e){} },[]);
  useEffect(()=>{ try{ localStorage.setItem('stylesug_cart', JSON.stringify(items)); }catch(e){} 
},[items]);
  function add(item){ setItems(prev=>{ const exists = prev.find(p=>p.id===item.id && 
p.variantId===item.variantId); if(exists) return prev.map(p=>p.id===item.id && 
p.variantId===item.variantId? {...p, qty:p.qty+item.qty}:p); return [...prev,item]; }); }
  function remove(id,variantId){ setItems(prev=>prev.filter(p=>!(p.id===id && 
p.variantId===variantId))); }
  function updateQty(id,variantId,qty){ setItems(prev=>prev.map(p=>p.id===id && 
p.variantId===variantId? {...p, qty}:p)); }
  function clear(){ setItems([]); }
  return <CartContext.Provider value={{ items, add, remove, updateQty, clear 
}}>{children}</CartContext.Provider>;
}
export const useCart = ()=>useContext(CartContext);
