import { useEffect, useState } from "react";
import "./Filters.css";

const Filters = ({products, setProducts, allProducts}) => {
  const [filters, setFilters] = useState({
    type: "",
    vegan: false,
    is_cruelty_free: false,
    non_toxic: false
  });

  useEffect(() => {
    let filteredProducts = [...allProducts];
  
    if (filters.type) {
      filteredProducts = filteredProducts.filter((product) => {
        return filters.type.toLowerCase() === product.type.toLowerCase();
      });  
    }

    if (filters.vegan) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.vegan === true;
      });  
    }

    if (filters.non_toxic) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.non_toxic === true;
      });  
    }

    if (filters.is_cruelty_free) {
      filteredProducts = filteredProducts.filter((product) => {
        return product.is_cruelty_free === true;
      });  
    }
    
    setProducts(filteredProducts);
  }, [filters]);

  const handleCheckboxChange = (event) => {
    setFilters({...filters, [event.target.id]: event.target.checked});
  }

  const handleRadioSelection = (event) => {
    setFilters({...filters, [event.target.name]: event.target.value});
  }

  return (
    <aside className="Filters">
      <h4>Filter By:</h4>
      <div className="types">
        <span>Product Type:</span>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            name="type" 
            value="" 
            id="any"
            onClick={handleRadioSelection}/>
          <label htmlFor="any" className="form-check-label">Any Type</label>
        </div>

        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            name="type" 
            value="moisturizer" 
            id="moisturizers"
            onClick={handleRadioSelection}/>
          <label htmlFor="moisturizers" className="form-check-label">Moisturizers</label>
        </div>

        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            name="type" 
            value="toner" 
            id="toners"
            onClick={handleRadioSelection}/>
          <label htmlFor="toners" className="form-check-label">Toners</label>
        </div>

        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            name="type" 
            value="cleanser" 
            id="cleansers"
            onClick={handleRadioSelection}/>
          <label htmlFor="cleansers" className="form-check-label">Cleansers</label>
        </div>
      </div>

      <div className="product-labels">
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox"  
            id="vegan"
            onChange={handleCheckboxChange}/>
          <label htmlFor="vegan" className="form-check-label">Vegan</label>
        </div>

        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="non_toxic"
            onChange={handleCheckboxChange}/>
          <label htmlFor="non_toxic" className="form-check-label">Non-toxic</label>
        </div>

        <div className="form-check">
          <input 
            className="form-check-input" 
            type="checkbox" 
            id="is_cruelty_free"
            onChange={handleCheckboxChange}/>
          <label htmlFor="is_cruelty_free" className="form-check-label">Cruelty-free</label>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
