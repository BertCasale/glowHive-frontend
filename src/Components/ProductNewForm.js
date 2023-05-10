export default function ProductNewForm() {
  return (<div className="ProductNewForm">
    <form>

      <label htmlFor="name">Name:</label>
      <input name="name" id="name" required/>

      <label htmlFor="brand">Brand</label>
      <input name="brand" id="brand" type="text" required/>

      <label htmlFor="image_url">Image URL:</label>
      <input name="image_url" id="image_url" type="text" required/>

      <label htmlFor="price">Price:</label>
      <input name="price" id="price" type="number" required/>

      <label htmlFor="details">Details:</label>
      <textarea name="details" id="details" required/>

      <label htmlFor="size_in_oz">Size in Oz:</label>
      <input name="size_in_oz" id="size_in_oz" type="number" placeholder="000.00" required/>

      <label htmlFor="type">Type:</label>
      <input name="type" id="type" type="text" required/>

      <label htmlFor="vegan">Vegan:</label>
      <input name="vegan" id="vegan" type="checkbox"/>

      <label htmlFor="is_cruelty_free">Cruelty Free:</label>
      <input name="is_cruelty_free" id="is_cruelty_free" type="checkbox"/>

      <label htmlFor="non_toxic">Non Toxic:</label>
      <input name="non_toxic" id="non_toxic" type="checkbox"/>

      <label htmlFor="ingredients">Ingredients:</label>
      <textarea name="ingredients" id="ingredients"/>

      <input type="submit"/>

    </form>
  </div>)
}