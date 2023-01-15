import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../App.css";

export const Update = () => {
  const id = useParams().blogId;
  const navigate = useNavigate();
  const [blogs, setBogs] = useState();
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    UpdateReq()
      .then(() => alert("Update Successful"))
      .then(() => navigate("/read"))
      .catch(() => alert("Oops!!Somthing Wrong"));
  };

  const getDetails = async () => {
    let res = await axios
      .get(`https://techify-backend-api.onrender.com/update/${id}`)
      .catch(() => alert("Oops!!Somthing Wrong"));
    const data = res.data;
    return data;
  };

  const UpdateReq = async () => {
    const res = await axios
      .put(`https://techify-backend-api.onrender.com/update/${id}`, {
        title: inputs.title,
        location: inputs.location,
        imgUrl: inputs.imgUrl,
        description: inputs.description,
      })
      .catch(() => alert("Oops!!Somthing Wrong"));

    const data = res.data;
    return data;
  };

  useEffect(() => {
    getDetails()
      .then((data) => {
        setBogs(data.blogs);
        setInputs({
          title: data.blogs.title,
          location: data.blogs.location,
          imgUrl: data.blogs.imgUrl,
          description: data.blogs.description,
        });
      })
      .catch(() => alert("Oops!!Somthing Wrong"));
  }, [id]);

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Welcome to the <span className="nav-name"> Update Page </span> of
            our blog application
          </h1>
          <p className="py-6">
            This is where you can make changes to your existing blog. Whether
            you need to edit a typo, update your blog's title or short
            description, or add a new image, you can do it all here. <br />
            We have provided an intuitive form for you to update the details of
            your blog. The form contains the same fields as the create page:
            title, short description, location, and image link. You can update
            the title, to make it more accurate or catching. Update the short
            description, to reflect the current information, location for the
            current events or any recent update on the subject and image link to
            showcase new images if required. <br />
            Once you've made your changes, simply click on the 'Update' button
            to save your changes and republish your blog. You can make updates
            as many times as you want to. Your readers will always have the most
            up-to-date information. So go ahead and make your blog the best it
            can be!
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            onSubmit={handleSubmit}
            action="/update"
            method="PUT"
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                placeholder="Title"
                onChange={handleChange}
                type={"title"}
                value={inputs.title}
                name="title"
                id="name"
                required
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
                required
                id="name"
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
                required
                id="name"
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
                required
                id="name"
                placeholder="Image URL"
                className="input input-bordered"
                minLength={5}
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline text-black" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
