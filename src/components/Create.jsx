import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Create = () => {
  const id = localStorage.getItem("userId");
  const [inputs, setInputs] = useState({
    authorId: id,
    title: "",
    location: "",
    description: "",
    imgUrl: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendReq = async () => {
    const res = await axios
      .post("https://techify-backend-api.onrender.com/create", {
        authorId: id,
        title: inputs.title,
        location: inputs.location,
        description: inputs.description,
        imgUrl: inputs.imgUrl,
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
      .then(() => {
        navigate("/read");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            This is where you can
            <span className="nav-name"> Create a new Blog </span> to share with
            the world.
          </h1>
          <p className="py-6">
            We have provided an intuitive form for you to fill out the details
            of your blog. <br />
            In the title field, you can give a brief and catchy title for your
            blog that will help others to understand what your blog is about.{" "}
            <br />
            In the short description field, you can provide a summary of your
            blog which will give the readers a brief idea of what to expect.{" "}
            <br />
            Location field where user can mention the location of the event or
            place they wrote about, it will give the readers an insight of their
            journey. <br />
            Image link field is where you can provide a link to an image that
            you want to showcase on your blog. <br />
            And once you've filled out the form, simply click on the 'Create'
            button to publish your new blog. It's that easy! So go ahead and
            share your thoughts, stories and ideas with the world.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            className="card-body"
            onSubmit={handleSubmit}
            action="/create"
            method="POST"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                onChange={handleChange}
                type={"title"}
                value={inputs.title}
                name="title"
                id="name"
                required
                placeholder="Title"
                className="input input-bordered"
                minLength={2}
                maxLength={20}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                onChange={handleChange}
                type={"description"}
                value={inputs.description}
                name="description"
                id="name"
                required
                placeholder="Description"
                className="input input-bordered"
                minLength={2}
                maxLength={50}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                onChange={handleChange}
                type={"location"}
                value={inputs.location}
                name="location"
                id="name"
                required
                placeholder="Location"
                className="input input-bordered"
                minLength={2}
                maxLength={12}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image Link</span>
              </label>
              <input
                onChange={handleChange}
                type={"imgUrl"}
                value={inputs.imgUrl}
                name="imgUrl"
                id="name"
                required
                placeholder="Image URL"
                className="input input-bordered"
                minLength={5}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline text-black" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
