import React from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
  return (
    <div className="blog">
      <Link to="./blog/what_i've_done">what i know</Link>
      more blogs comming sooon!
      <Link to="/">back</Link>
    </div>
  );
};
