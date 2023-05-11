import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import veganLogo from "../assets/vegan.png";
import nonToxicLogo from "../assets/non-toxic.png";
import crueltyFree from "../assets/cruelty-free.png";
import "./ProductDetails.css";
const API = process.env.REACT_APP_API_URL;

export default function ProductDetails() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(API);
  useEffect(() => {
    axios
      .get(`${API}/products/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((e) => {
        console.warn("error", e);
      });
  }, [id]);

  const deleteProduct = () => {
    axios
      .delete(`${API}/products/${id}`)
      .then(() => navigate(`/products`))
      .catch((e) => console.warn("error", e));
  };

  const deleteHandler = () => {
    deleteProduct();
  };

  return (
    <div className="ProductDetails">

      <div className="container text-left">
        <div className="row">

          <div className="col">
            <img
              className="product-image img-fluid"
              src={product.image_url}
              alt={product.name}/>
          </div>

          <div className="col information">
            <h2 className="product-name">{product.name}</h2>
            <h4>{product.brand}</h4>
            <h6>{product.type}</h6>

            {/* if price is < Budget Fridenly */}
            <h4>${product.price}</h4>
            <h5>{product.size_in_oz} oz </h5>
            <h6>{product.details}</h6>

          </div>
        </div>
      </div>

      <div className="Logo-Highlights">
        {product.vegan ? <img alt="vegan logo" src={veganLogo} title="Vegan"/> : null}
        {product.non_toxic ? (
          <img alt="non toxic logo" src={nonToxicLogo} title="Non Toxic"/>
        ) : null}
        {product.is_cruelty_free ? (
          <img alt="cruelty free logo" src={crueltyFree} title="Cruelty Free"/>
        ) : null}
      </div>

      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/products`}>
            <button>Home</button>
          </Link>
        </div>
        <div>
          <Link to={`/products/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={deleteHandler}>Delete</button>
        </div>
      </div>

    </div>
  );
}
