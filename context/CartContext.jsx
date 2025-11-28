import { createContext, useContext, useEffect, useState } from 'react'
const CartContext = createContext()
export function CartProvider({ children }){
  const [items, setItems] = useState([])
  useEffect(()=>{ try{ const raw=localStorage.getItem('stylesug_cart'); if(raw) setItems(JSON.parse(raw)); }catch(e){} },[])
  useEffect(()=>{ try{ localStorage.setItem('stylesug_cart', JSON.stringify(items)); }catch(e){} },[items])
  function add(item){ setItems(prev=>{ const exists = prev.find(p=>p.id===item.id); if(exists) return prev.map(p=>p.id===item.id? {...p, qty: p.qty + item.qty}:p); return [...prev, item]; }) }
  function updateQty(id, qty){ setItems(prev=>prev.map(p=>p.id===id? {...p, qty}:p)) }
  function remove(id){ setItems(prev=>prev.filter(p=>p.id!==id)) }
  function clear(){ setItems([]) }
  return <CartContext.Provider value={{ items, add, updateQty, remove, clear }}>{children}</CartContext.Provider>
}
export const useCart = ()=> useContext(CartContext)
