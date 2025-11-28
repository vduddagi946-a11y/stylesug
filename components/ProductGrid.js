
import Link from 'next/link';

const items = [
  {id:1, title:'Pastel Hoodie', price:'₹999', img:'/placeholder.png'},
  {id:2, title:'Soft Tee', price:'₹499', img:'/placeholder.png'},
  {id:3, title:'Summer Dress', price:'₹1299', img:'/placeholder.png'}
];

export default function ProductGrid(){
  return (
    <div style={{
      display:'grid',
      gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',
      gap:20
    }}>
      {items.map((p)=>(
        <Link key={p.id} href={`/product/${p.id}`}>
          <div style={{
            background:'#fff',
            borderRadius:12,
            padding:16,
            boxShadow:'0 4px 10px rgba(0,0,0,0.08)',
            cursor:'pointer'
          }}>
            <img src={p.img} style={{width:'100%',borderRadius:12}} />
            <h3 style={{marginTop:10}}>{p.title}</h3>
            <p style={{color:'#777'}}>{p.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
