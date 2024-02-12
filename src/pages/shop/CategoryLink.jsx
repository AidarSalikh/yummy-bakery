import React from "react";
import { Link } from "react-router-dom";

function CategoryLink({ link, name }) {
  return (
    <div className="slider-link">
      <Link to={link}>{name}</Link>
    </div>
  );
}

export default CategoryLink;
