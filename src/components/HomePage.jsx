import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export const HomePage = () => {
  const navigate = useNavigate();
  const goToCreate = () => {
    navigate("/create");
  };
  const goToRead = () => {
    navigate("/read");
  };
  const goToAllBlogs = async () => {
    navigate(`/allBlogs`);
  };
  return (
    <div className="hero min-h-screen home">
      <div className="hero-overlay bg-opacity-20"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Wellcome to <span className="nav-name"> TechifY</span>
          </h1>
          <p className="mb-5 text-white">
            A platform where writers and readers alike can come together to
            share stories and ideas. Our user-friendly interface makes it easy
            for anyone to create, read, update, and delete their own blogs with
            ease. You'll have the ability to manage your own content and explore
            the blogs of other users to discover new perspectives and ideas.
            Whether you're here to share your own stories, or just to see what
            others have to say, our platform is designed to provide a seamless
            experience for all. So come on in, make yourself at home, and let's
            start exploring the world of blogging together!"
          </p>
          <button
            className="btn btn-outline btn-info m-2 text-white"
            onClick={goToCreate}
          >
            Add Blog
          </button>
          <button
            className="btn btn-outline btn-info m-2 text-white"
            onClick={goToRead}
          >
            My Blogs
          </button>
          <button
            className="btn btn-outline btn-info m-2 text-white"
            onClick={goToAllBlogs}
          >
            All Blogs
          </button>
        </div>
      </div>
    </div>
  );
};
