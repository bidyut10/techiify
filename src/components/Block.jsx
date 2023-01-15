import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import '../App.css'

export const Block = ({
  id,
  title,
  location,
  description,
  imgUrl,
  Update,
  Delete,
}) => {
  const navigate = useNavigate();
  const deleteBlog = async () => {
    await axios
      .delete(`https://techify-backend-api.onrender.com/delete/${id}`)
      .then(() => navigate("/home"))
      .catch((err) => console.log(err));
  };

  const updateClick = () => {
    navigate(`/update/${id}`);
  };

  return (
    <div className="bloc">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={imgUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">{location}</div>
          </h2>
          <p>{description}</p>
          {Update === "Update" && Delete === "Delete" ? (
            <div className="card-actions justify-end">
              <button
                className="btn btn-outline btn-secondary"
                onClick={updateClick}
              >
                {Update}
              </button>
              <button
                className="btn btn-outline"
                onClick={deleteBlog}
              >
                {Delete}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
