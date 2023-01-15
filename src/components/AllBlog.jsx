import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Block } from "./Block";
import "../App.css";

export const AllBlog = () => {
  const [blogs, setblogs] = useState();
  const sendReq = async () => {
    const res = await axios
      .get(`https://techify-backend-api.onrender.com/allBlogs`)
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    sendReq()
      .then((data) => setblogs(data.blogs))
      .catch((err) => console.log(err));
  }, []);
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
            location={blog.location}
            imgUrl={blog.imgUrl}
          />
        ))}
    </div>
  );
};
