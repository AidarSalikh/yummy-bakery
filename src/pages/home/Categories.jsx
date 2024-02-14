import React from "react";
import { categories } from "../../data/categories";
import CategoryCard from "./CategoryCard";

function Categories() {
  console.log(categories);
  return (
    <>
      {categories.map((cat) => (
        <CategoryCard key={cat.id} {...cat} />
      ))}
    </>
  );
}

export default Categories;
