import React from "react";
import data from "../products.json";
import axios from "axios";
const Cards = (props) => {
  return (
    <>
      <h1 className="p-heading"> Featured Products</h1>
      <section className="card-format">
        {data.map((vinyl) => {
          return (
            <div className="card">
              <img src={vinyl.image} alt={vinyl.title} className="card-img" />
              <div className="card-body">
                <h2 className="card-title">{vinyl.title}</h2>
                <p className="card-description">{vinyl.description}</p>
                <h3 className="card-price">{vinyl.price}</h3>
                <button className="card-btn">Add to cart</button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Cards;
