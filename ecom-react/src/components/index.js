import React from "react";

const Home = () => {
  return (
    <div>
      {" "}
      <main class="hero-image">
        <div class="topnav">
          <img class="img" src="../img/logo.png" alt="vinyls" />
          <a href="#home">Home</a>
          <a href="products.html">Products</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="hero-text">
          <h1>Big Bren's Vinyl's </h1>
          <p>Shop For Your Favorite Albums </p>
          <a href="products.html" id="firstB">
            Products
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
