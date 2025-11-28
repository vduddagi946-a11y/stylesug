
import Nav from '../../components/Nav';

export default function ProductPage(){
  return (
    <>
      <Nav />
      <div style={padding:40}>
        <img src="/placeholder.png" style={width:'300px',borderRadius:12} />
        <h1>Product 3</h1>
        <p>₹999</p>
      </div>
    </>
  );
}
