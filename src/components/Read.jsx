import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Block } from "./Block";
import "../App.css";

export const Read = () => {
  const [blogs, setblogs] = useState();
  const id = localStorage.getItem("userId");
  const sendReq = async () => {
    const res = await axios
      .get(`https://techify-backend-api.onrender.com/blogs/${id}`)
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    sendReq()
      .then((data) => setblogs(data.blogs))
      .catch((err) => console.log(err));
  }, [id]);
  // console.log(blogs)

  return (
    <div className="block">
      {blogs &&
        blogs.map((blog, index) => (
          <Block
            id={blog._id}
            key={index}
            title={blog.title}
            description={blog.description}
            imgUrl={blog.imgUrl}
            location={blog.location}
            Update="Update"
            Delete="Delete"
          />
        ))}
    </div>
  );
};
