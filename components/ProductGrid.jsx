import Link from 'next/link'
import products from '../data/products.json'
export default function ProductGrid(){
  return (
    <div className="grid container" style={{marginTop:20}}>
      {products.map(p=>(
        <Link href={'/product/'+p.id} key={p.id}>
          <a className="card" style={{display:'block',textDecoration:'none',color:'inherit'}}>
            <img src={p.image} alt={p.title} style={{width:'100%',height:220,objectFit:'cover'}} />
            <div style={{padding:12}}>
              <div style={{fontWeight:700}}>{p.title}</div>
              <div className="small">{p.brand} • {p.category}</div>
              <div className="price" style={{marginTop:8}}>₹{p.price}</div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  )
}
