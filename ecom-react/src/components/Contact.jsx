import React from "react";
const emailState = {
  email: "",
  error: "",
};
class Contact extends React.Component {
  constructor() {
    super();
    this.state = emailState;
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      email: e.target.value,
    });
  }
  emailValidation() {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!this.state.email || regex.test(this.state.email) === false) {
      this.setState({
        error: "Email is not valid",
      });
      return false;
    }
    return true;
  }
  onSubmit() {
    if (this.emailValidation()) {
      console.log(this.state);
      this.setState(emailState);
    }
  }
  render() {
    return (
      <section class="contact">
        <form>
          <input
            name="name"
            type="text"
            class="feedback-input"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            className="feedback-input"
            placeholder="Email"
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

          <span className="text-danger">{this.state.error}</span>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-dark"
              onClick={() => this.onSubmit()}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Contact;
