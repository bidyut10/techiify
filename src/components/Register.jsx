import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../App.css";

export const Register = () => {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendReq = async () => {
    const res = await axios
      .post("https://techify-backend-api.onrender.com/register", {
        name: inputs.name,
        phone: inputs.phone,
        password: inputs.password,
        email: inputs.email,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    // console.log(data);
    return data;
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs);
    sendReq()
      .then(() => alert("Registration Successful"))
      .then(() => {
        navigate("/logIn");
      })
      .catch(() => alert("Check Your Details"));
  };

  return (
    <div id="register" className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Welcome to our <span className="nav-name"> Registration </span>{" "}
            Page!
          </h1>
          <p className="py-6">
            Here, you can create an account that will allow you to access all of
            the features and services on our website. To get started, please
            enter your personal information, including your name, phone number,
            and email address. You'll also need to create a password, which will
            be used to log in to your account. <br />
            Once you've entered your information and created your password,
            click the "Register" button to submit your registration. You'll be
            taken to a confirmation page, where you can review your details
            before your account is created. If everything looks good, click the
            "Confirm" button to complete your registration. <br />
            After you've registered, you'll be able to log in to your account
            using the email and password you provided. From there, you'll be
            able to access all of the features and services on our website that
            are available to registered users. Thanks for joining! <br />
            It's important to keep your account details and credentials safe, to
            avoid unauthorized access. And also may want to add some features
            such as password complexity and confirmation mail, to ensure that
            only you can access your account.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            className="card-body"
            onSubmit={handleSubmit}
            action="/register"
            method="POST"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                placeholder="name"
                className="input input-bordered"
                onChange={handleChange}
                type={"name"}
                value={inputs.name}
                name="name"
                id="name"
                required
                minLength={8}
                maxLength={25}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone No</span>
              </label>
              <input
                placeholder="Phone"
                className="input input-bordered"
                onChange={handleChange}
                type={"phone"}
                value={inputs.phone}
                name="phone"
                id="name"
                required
                maxLength={10}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                placeholder="email"
                className="input input-bordered"
                onChange={handleChange}
                type={"email"}
                value={inputs.email}
                name="email"
                id="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                placeholder="password"
                className="input input-bordered"
                onChange={handleChange}
                type={"password"}
                value={inputs.password}
                name="password"
                id="name"
                required={true}
                minLength={6}
                maxLength={15}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline text-black" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
// export default Register
