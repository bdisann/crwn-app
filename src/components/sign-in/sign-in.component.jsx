import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.state({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    console.log(event.target);

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have account</h2>
        <p className="subtitle">Sign in with your email and password</p>

        <form onSubmit={this.handleSubmit} action="">
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            defaultValue={this.state.email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            defaultValue={this.state.password}
            label="Password"
            required
          />

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
