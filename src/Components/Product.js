import "./Product.css";
import {Link} from "react-router-dom";

export default function Product({ product }) {
  return (<div className="Product">
    <Link to={`/products/${product.id}`}>
      <div className="product-card">
        <div className="image">
          <img src={product.image_url} />
        </div>

        <div className="info">
          <h3>{product.name}</h3>
        <h4>{product.brand}</h4>
        <strong>
          <h5>${product.price}</h5>
        </strong>
        </div>
        
      </div>
    </Link>
  </div>);
}
