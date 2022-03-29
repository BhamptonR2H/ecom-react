import React from "react";
import Carousel from "react-elastic-carousel";
import Reviews from "../testimonials.json";

const Slider = () => {
  return (
    <section className="testimonial-wrapper">
      <h1 className="main-heading">Testimonials</h1>
      <Carousel>
        {Reviews.map((Reviews) => (
          <section className="testimonial-container" key={Reviews.id}>
            <img src={Reviews.image} alt={Reviews.Name} />
            <section className="testimonial-Review-container">
              <h3 className="testimonial-name">{Reviews.Name}</h3>
              <p className="Review">{Reviews.Review}</p>
            </section>
          </section>
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;
