import React from "react";

const Contact = () => {
  return (
    <section class="contact">
      <h1> Contact </h1>
      <form>
        <input
          name="name"
          type="text"
          class="feedback-input"
          placeholder="Name"
          required
        />
        <input
          name="email"
          type="text"
          class="feedback-input"
          placeholder="Email"
          required
        />
        <input
          name="number"
          class="feedback-input"
          placeholder="Your number(Optional)"
        />
        <textarea
          name="text"
          class="feedback-input"
          placeholder="Comment"
        ></textarea>
        <input type="submit" value="SUBMIT" />
      </form>
    </section>
  );
};

export default Contact;
