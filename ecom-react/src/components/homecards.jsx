import React from "react";
import data from "../record.json";
const homecards = (record) => {
  return (
    <>
      <h1 className="p-heading"> Record Players</h1>
      <section className="card-format">
        {data.map((record) => {
          return (
            <div className="card">
              <img src={record.image} alt={record.title} className="card-img" />
              <div className="card-body">
                <h2 className="card-title">{record.title}</h2>
                <p className="card-description">{record.description}</p>
                <h3 className="card-price">{record.price}</h3>
                <button className="card-btn">Add to cart</button>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default homecards;
