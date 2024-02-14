import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryCard({ image, name }) {
  const navigate = useNavigate();
  return (
    <div className="category-card">
      <img src={image} alt="" />
      <h3 className="category-card--title">{name}</h3>
    </div>
  );
}

export default CategoryCard;
