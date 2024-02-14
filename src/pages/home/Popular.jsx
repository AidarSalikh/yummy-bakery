import React from "react";
import { useSelector } from "react-redux";
import { selectAllItems } from "../../features/shop/shopSlice";
import ProductItem from "../shop/ProductItem";

function Popular() {
  const items = useSelector(selectAllItems);
  const popular = items.filter((item) => item.popular);
  return (
    <>
      {popular.map((item) => {
        return <ProductItem key={item.id} {...item} />;
      })}
    </>
  );
}

export default Popular;
