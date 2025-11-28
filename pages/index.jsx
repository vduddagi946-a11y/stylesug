import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'



export default function Home(){ return (<div><Header/><main><Hero ctas={<a href="/shop" 
className="primary-cta">Shop Now</a>} /><section className="container"><h2 
style={{fontSize:22}}>Featured</h2><p className="small">Curated picks for you. Connect 
Shopify to show live products.</p></section></main><Footer/></div>) }
