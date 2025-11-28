import ProductCard from './ProductCard';
export default function ProductGrid({products}){ return (<div className="grid 
container">{products.map(p=><ProductCard key={p.id} p={p} />)}</div>) }
