import React from "react";
const Home = () => {
  return (
    <>
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
      <h2 class="featured-products-title">Top Sellers</h2>
      <section class="featured-products">
        <div class="featured-product-item">
          <div
          // style="background-image: url('img/adele.jpg');"
          // class="featured-product-item-image"
          ></div>
          <p class="title">Adele's "21" Vinyl</p>
          <p class="description">Adeles Best Album No Debate</p>
          <p class="price">$40</p>
          <button>View item</button>
        </div>
        <div class="featured-product-item">
          <div
          // style="background-image: url('img/tpab.jpg');"
          // class="featured-product-item-image"
          ></div>
          <p class="title">To Pimp A Butterfly Vinyl</p>
          <p class="description">The Best Album Of The 2010s</p>
          <p class="price">$40</p>
          <button>View item</button>
        </div>
        <div class="featured-product-item">
          <div
          // style="background-image: url('img/lateres.jpg');"
          // class="featured-product-item-image"
          ></div>
          <p class="title">Late Registration</p>
          <p class="description">Ye's Never Fails</p>
          <p class="price">$40</p>
          <button>View item</button>
        </div>
      </section>
      <h2 class="featured-products-title"> Record Players</h2>
      <section class="featured-products">
        <div class="featured-product-item">
          <div
          // style="background-image: url('img/red.jpg');"
          // class="featured-product-item-image"
          ></div>
          <p class="title">Red Record Player</p>
          <p class="description">
            A Red Record Player You Can Play Your Vinyls On
          </p>
          <p class="price">from $49.99</p>
          <button>View item</button>
        </div>
        <div class="featured-product-item">
          <div
          // style="background-image: url('img/bvinyl.jpg');"
          // class="featured-product-item-image"
          ></div>
          <p class="title">Blue Record Player</p>
          <p class="description">
            A Blue Record Player You Can Play Your Vinyls On
          </p>
          <p class="price">from $49.99</p>
          <button>View item</button>
        </div>
        <div class="featured-product-item">
          <div
          // style="background-image: url('img/purple.jpg');"
          // class="featured-product-item-image"
          ></div>
          <p class="title">Purple Record Player</p>
          <p class="description">
            A Purple Record Player You Can Play Your Vinyls On
          </p>
          <p class="price">from $49.99</p>
          <button>View item</button>
        </div>
      </section>
    </>
  );
};
export default Home;
