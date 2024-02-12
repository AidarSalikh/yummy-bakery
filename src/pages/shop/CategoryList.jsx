import React from "react";
import { linksArray } from "../../utils/linksArray";
import CategoryLink from "./CategoryLink";

function CategoryList() {
  return (
    <ul className="shop-nav">
      {linksArray.map((link) => {
        return (
          <li key={link.name}>
            <CategoryLink {...link} />
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryList;
