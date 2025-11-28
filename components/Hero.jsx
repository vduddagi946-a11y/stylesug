export default function Hero(){
  return (
    <section className="hero">
      <div className="container" style={{display:'flex',gap:24,alignItems:'center',padding:'48px 0'}}>
        <div style={{flex:1}}>
          <h1 style={{fontSize:36,margin:0}}>Trendy Pastel Fashion</h1>
          <p className="small" style={{marginTop:12}}>Soft colors, great fits — designed for everyday comfort.</p>
          <div style={{marginTop:18}}><a href="/shop" className="primary-cta">Shop Now</a></div>
        </div>
        <div style={{flex:1}}>
          <div style={{width:'90%',height:320,borderRadius:16,background:'linear-gradient(135deg,#fff,#f2f6ff)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 10px 30px rgba(2,6,23,0.06)'}}>Product Collage</div>
        </div>
      </div>
    </section>
  )
}
