import sample from '../../data/sample-products.json';
export default async function handler(req, res) {
  const SHOP = process.env.NEXT_PUBLIC_SHOPIFY_STORE;
  const TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN;
  const handle = req.query.handle || null;
  if (!SHOP || !TOKEN) {
    if (handle) {
      const p = sample.products.find(x=>x.handle===handle);
      return res.status(200).json({ product: p || null });
    }
    return res.status(200).json({ products: sample.products });
  }
  try {
    const query = handle ? `query productByHandle($handle:String!){ 
productByHandle(handle:$handle){id title description handle 
images(first:10){edges{node{url}}} variants(first:10){edges{node{id price} }} } }` : 
      `query getProducts($first:Int!){ products(first:$first){edges{node{id title handle description 
primaryImage{url} variants(first:1){edges{node{id price}}}}}}}`;
    const variables = handle ? { handle } : { first: 24 };
    const apiRes = await fetch(`https://${SHOP}/api/2025-10/graphql.json`, {
      method: 'POST', 

      headers: { 'Content-Type':'application/json', 'X-Shopify-Storefront-Access-Token': TOKEN },
      body: JSON.stringify({ query, variables })
    });
    const json = await apiRes.json();
    if (handle) {
      const p = json.data.productByHandle;
      const product = p? { id:p.id, title:p.title, description:p.description, handle:p.handle, 
images:(p.images.edges||[]).map(e=>e.node.url), 
variants:(p.variants.edges||[]).map(e=>({id:e.node.id, price:e.node.price})), price: 
p.variants?.edges?.[0]?.node?.price || null } : null;
      return res.status(200).json({ product });
    }
    const products = (json.data.products.edges||[]).map(e=>({ id:e.node.id, title:e.node.title, 
description:e.node.description, handle:e.node.handle, images: e.node.primaryImage? 
[e.node.primaryImage.url] : [], price: e.node.variants?.edges?.[0]?.node?.price || null }));
    return res.status(200).json({ products });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
