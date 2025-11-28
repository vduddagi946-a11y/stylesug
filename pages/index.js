
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';

export default function Home(){
  return (
    <>
      <Nav />
      <Hero />
      <div style={{padding:'40px'}}>
        <ProductGrid />
      </div>
    </>
  );
}
