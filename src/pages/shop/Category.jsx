import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { getTotalPrice, selectAllItems } from "../../features/shop/shopSlice";

function Category() {
  const { category } = useParams();
  const shopItems = useSelector(selectAllItems);
  const items = shopItems.filter((item) => item.category === category);

  return (
    <div className="product-list">
      {items.map((item) => {
        return <ProductItem key={item.id} {...item} />;
      })}
    </div>
  );
}

export default Category;
