import React, { useState, useEffect } from "react";
import Axios from "axios";
const Cards = () => {
  // Updated initial state of products from the JSON
  const [price, setPrice] = useState("");
  // Callback Function that updates the state of the price variable
  const setSelectedPrice = (event) => {
    setPrice(event.target.value);
  };
  const [genre, setGenre] = useState("");
  const setSelectedGenre = (event) => {
    setGenre(event.target.value);
  };
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // GET Request using axios inside useEffect React hook
    Axios.get(`http://localhost:5000/product?${price}&${genre}`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        throw err;
      });
  }, [genre, price]);
  return (
    <>
      {/* Created 2 dropdowns, Passed in onChange function*/}
      <h1 className="p-heading"> Featured Products</h1>
      <section className="Filter">
        <label htmlFor="priceSort">Price:</label>
        <select onChange={setSelectedPrice} name="priceSort" id="priceSort">
          <option value="low">Low to high</option>
          <option value="high">High to low</option>
        </select>
        <label htmlFor="genreFilter">Genre:</label>

        <select onChange={setSelectedGenre} name="genreFilter" id="genreFilter">
          <option value="">All</option>
          <option value="Pop">Pop</option>
          <option value="Rap">Rap</option>
        </select>
      </section>
      <section className="card-format">
        {/* Mapping through array of products */}
        {products.map((vinyl) => {
          return (
            <div className="card">
              <img src={vinyl.image} alt={vinyl.title} className="card-img" />
              <div className="card-body">
                <h2 className="card-title">{vinyl.title}</h2>
                <p className="card-description">{vinyl.description}</p>
                <h3 className="card-price">{vinyl.price}</h3>
                <button className="card-btn">View Item</button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Cards;
