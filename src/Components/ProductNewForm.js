import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function ProductNewForm() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    image_url: "",
    price: "",
    details: "",
    size_in_oz: "",
    type: "",
    vegan: false,
    is_cruelty_free: false,
    non_toxic: false,
    ingredients: "",
  });

  const handleTextChange = (event) => {
    setProduct({...product, [event.target.id]: event.target.value})
  }

  const handleNumberChange = (event) => {
    const num = Number(event.target.value)
    setProduct({...product, [event.target.id]: num})
  }

  const handleCheckboxChange = (event) => {
    setProduct({...product, [event.target.id]: !product[event.target.id]});
  }

  const addProduct = (newProduct) => {
    axios.post(`${API}/products`, newProduct)
    .then(() => {
      navigate("/products");
    })
    .catch((e) => console.warn("error", e));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct(product);
  }

  return (<div className="ProductNewForm">
    <form onSubmit={handleSubmit} className="needs-validation">

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input 
          className={`form-control ${product.name ? "is-valid" : "is-invalid"}`}
          name="name" 
          id="name" 
          required
          value={product.name}
          onChange={handleTextChange}/>
        <div className="invalid-feedback">
          Please enter a product name.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="brand" className="form-label">Brand</label>
        <input 
          className={`form-control ${product.brand ? "is-valid" : "is-invalid"}`}
          name="brand" 
          id="brand" 
          type="text" 
          required
          value={product.brand}
          onChange={handleTextChange}/>
        <div className="invalid-feedback">
          Please enter the products brand.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="image_url" className="form-label">Image URL</label>
        <input 
          className={`form-control ${product.image_url ? "is-valid" : "is-invalid"}`}
          name="image_url" 
          id="image_url" 
          type="text" 
          required
          value={product.image_url}
          onChange={handleTextChange}/>
        <div className="invalid-feedback">
          Please enter a URL for the products image.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price</label>
        <input 
          className={`form-control ${product.price ? "is-valid" : "is-invalid"}`}
          name="price" 
          id="price" 
          type="number" 
          required
          value={product.price}
          onChange={handleNumberChange}/>
        <div className="invalid-feedback">
          Please enter a number for the price.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="details" className="form-label">Details</label>
        <textarea 
          className={`form-control ${product.details ? "is-valid" : "is-invalid"}`}
          name="details" 
          id="details" 
          required
          value={product.details}
          onChange={handleTextChange}/>
        <div className="invalid-feedback">
          Please enter the product details.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="size_in_oz" className="form-label">Size in Oz</label>
        <input 
          className={`form-control ${product.size_in_oz ? "is-valid" : "is-invalid"}`}
          name="size_in_oz" 
          id="size_in_oz" 
          type="number" 
          placeholder="000.00" 
          required
          value={product.size_in_oz}
          onChange={handleNumberChange}/>
        <div className="invalid-feedback">
          Please enter a size.
        </div>
      </div>

      <div className="mb-3" >
        <label htmlFor="type" className="form-label">Type</label>
        <input 
          className={`form-control ${product.type ? "is-valid" : "is-invalid"}`}
          name="type" 
          id="type" 
          type="text" 
          required
          value={product.type}
          onChange={handleTextChange}/>
        <div className="invalid-feedback">
          Please enter a product type.
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="ingredients" className="form-label">Ingredients</label>
        <textarea 
          className="form-control"
          name="ingredients" 
          id="ingredients"
          placeholder="optional"
          value={product.ingredients ? product.ingredients : ""}
          onChange={handleTextChange}/>
      </div>


      <div className="form-check" >
        <input 
          className="form-check-input"
          name="vegan" 
          id="vegan" 
          type="checkbox"
          checked={product.vegan}
          onChange={handleCheckboxChange}/>
        <label htmlFor="vegan" className="form-check-label">Vegan</label>
      </div>

      <div className="form-check" >
        <input 
          className="form-check-input"
          name="is_cruelty_free" 
          id="is_cruelty_free" 
          type="checkbox"
          checked={product.is_cruelty_free}
          onChange={handleCheckboxChange}/>
        <label htmlFor="is_cruelty_free" className="form-check-label">Cruelty Free</label>
      </div>

      <div className="form-check" >
        <input 
          className="form-check-input"
          name="non_toxic" 
          id="non_toxic" 
          type="checkbox"
          checked={product.non_toxic}
          onChange={handleCheckboxChange}/>
        <label htmlFor="non_toxic" className="form-check-label">Non Toxic</label>
      </div>

      <input type="submit" className="submit-button"/>

    </form>
  </div>)
}