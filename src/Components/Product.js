export default function Product({ product }) {
  return (
    <div className="Product">
      <img src={product.image_url} />
      <h3>{product.name}</h3>
      <h4>{product.brand}</h4>
      <strong>
        <h5>${product.price}</h5>
      </strong>
    </div>
  );
}
