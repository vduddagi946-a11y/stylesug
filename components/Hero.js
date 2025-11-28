
export default function Hero(){
  return (
    <section style={{
      padding:'60px 20px',
      background:'linear-gradient(135deg,#ffe6f2,#e6f0ff)',
      textAlign:'center'
    }}>
      <h1 style={{fontSize:36,fontWeight:700,color:'#333'}}>Discover Your Style</h1>
      <p style={{marginTop:10,fontSize:18,color:'#555'}}>Trendy pastel fashion for everyone</p>
      <div style={{marginTop:30,display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:20}}>
        <div style={{background:'#fff',padding:20,borderRadius:16,boxShadow:'0 4px 12px rgba(0,0,0,0.08)'}}>Dress</div>
        <div style={{background:'#fff',padding:20,borderRadius:16,boxShadow:'0 4px 12px rgba(0,0,0,0.08)'}}>Tops</div>
        <div style={{background:'#fff',padding:20,borderRadius:16,boxShadow:'0 4px 12px rgba(0,0,0,0.08)'}}>Shoes</div>
      </div>
    </section>
  );
}
