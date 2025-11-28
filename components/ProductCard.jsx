import Link from 'next/link';

export default function ProductCard({ p }) {
  return (
    <div className="card">
      <Link href={'/product/' + p.handle}>
        <a>
          <img src={p.images?.[0] || '/sample-images/shirt1.jpg'} alt={p.title} />
        </a>
      </Link>

      <div style={{marginTop:8,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <div>
          <div style={{fontWeight:700}}>{p.title}</div>
          <div className="small">{p.description}</div>
        </div>

        <div style={{textAlign:'right'}}>
          <div style={{marginBottom:8}} className="price">₹{p.price}</div>

          <div style={{marginTop:8}}>
            <button
              style={{
                borderRadius:12,
                padding:'8px 12px',
                background:'linear-gradient(90deg,var(--brand-accent),var(--brand-accent-2))',
                color:'#fff',
                fontWeight:600
              }}>
              Quick add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
