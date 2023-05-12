import { useEffect, useState } from "react";
import "./Filters.css";

const Filters = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {});
  return (
    <aside className="Filters">
      <h4>Filter By:</h4>
      <div className="types">
        <span>Product Type:</span>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="type" value="" id="any"/>
          <label htmlFor="any" className="form-check-label">Any Type</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="type" value="moisturizer" id="moisturizers"/>
          <label htmlFor="moisturizers" className="form-check-label">Moisturizers</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="type" value="toner" id="toners"/>
          <label htmlFor="toners" className="form-check-label">Toners</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="radio" name="type" value="cleanser" id="cleansers"/>
          <label htmlFor="cleansers" className="form-check-label">Cleansers</label>
        </div>
      </div>

      <div className="product-labels">
        <div className="form-check">
          <input className="form-check-input" type="checkbox"  id="vegan"/>
          <label htmlFor="vegan" className="form-check-label">Vegan</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="non_toxic"/>
          <label htmlFor="non_toxic" className="form-check-label">Non-toxic</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="is_cruelty_free"/>
          <label htmlFor="is_cruelty_free" className="form-check-label">Cruelty-free</label>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
