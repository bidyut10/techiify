import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

export const About = () => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/login");
  };
  return (
    <div className="hero min-h-screen about">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-people-waving-illustration_23-2149218851.jpg?w=1060&t=st=1673694331~exp=1673694931~hmac=f91a6d77a868912823d215d0ad3413442eb472bdea739a43521f408c7fe45386"
          className="max-w-sm rounded-lg"
        />
        <div>
          <h1 className="text-5xl font-bold">
            About <span className="nav-name"> Us!</span>
          </h1>
          <p className="py-6">
            Welcome to our blog application, built using the latest in web
            technologies such as React JS, JavaScript, Node JS, and MongoDB. We
            strive to provide a seamless and enjoyable user experience for all
            of our visitors. Our blog features a wide range of topics and
            content, written by a diverse group of authors. <br />
            Thank you for visiting our blog and we hope you enjoy the content!
          </p>
          <button className="btn btn-outline btn-secondary" onClick={login}>
            LogIn Now!
          </button>
        </div>
      </div>
    </div>
  );
};
