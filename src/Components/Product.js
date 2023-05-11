import "./Product.css";
import {Link} from "react-router-dom";

export default function Product({ product }) {
  return (<div className="Product">
    <Link to={`/products/${product.id}`}>
      <div className="card">

        <img src={product.image_url} className="card-img-top" />

        <div className="card-body">
          <h4 className="card-title">{product.name}</h4>
          <h5 className="card-text">{product.brand}</h5>
          <strong>
            <p className="card-text">${product.price}</p>
          </strong>
        </div>
        
      </div>
    </Link>
  </div>);
}
