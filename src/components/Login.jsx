import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import '../App.css'

export const Login = () => {
  const [inputs, setInputs] = useState({
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
      .post("https://techify-backend-api.onrender.com/login", {
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
      .then((data) => localStorage.setItem("userId", data.user._id))
      .then(() => alert("Login Successful"))
      .then(() => {
        navigate("/home");
      })
      .catch(() => alert("Oops Incorrect Details"));
  };

  return (
    <div
      id="login"
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Login <span className="nav-name"> Now! </span>
          </h1>
          <p className="py-6">
            Login may take a moment. Please be patient, we're working to improve
            it. <br />
            You can use that pre-set credentials to login, no reg. needed.{" "}
            <br />
            {"["} Email: demo1234@gmail.com <br />
            Password: pass1234 {"]"}
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit} action="/login">
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
                minLength={10}
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
                required
                maxLength={15}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline text-black" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
