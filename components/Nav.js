
import Link from 'next/link';

export default function Nav(){
  return (
    <nav>
      <div style={{fontWeight:700,fontSize:22}}>StyleSug</div>
      <div style={{display:'flex',gap:20}}>
        <Link href="/">Home</Link>
        <Link href="/men">Men</Link>
        <Link href="/women">Women</Link>
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
}
