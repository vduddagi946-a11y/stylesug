export default function Hero({title,ctas}){
  return (<section className="hero container"><div className="left"><h1 
style={{fontSize:42,margin:0,lineHeight:1.05}}>{title||'StyleSUG — Modern fashion'}</h1><p 
className="small" style={{marginTop:12}}>Premium materials. Thoughtful design. Crafted 
for confidence.</p><div style={{marginTop:18}}>{ctas}</div></div><div className="right"> 
<div 
style={{width:'90%',height:'90%',borderRadius:12,background:'linear-gradient(180deg,rgba(2
55,77,109,0.06),rgba(11,18,32,0.02))',display:'flex',alignItems:'center',justifyContent:'center',f
ontWeight:700,color:'var(--brand-900)'}}>Product collage</div></div></section>)
}
