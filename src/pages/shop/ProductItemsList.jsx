import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";
import { selectAllItems } from "../../features/shop/shopSlice";

function ProductItemsList() {
  const items = useSelector(selectAllItems);

  return (
    <div className="product-list">
      {items.map((item) => {
        return <ProductItem key={item.id} {...item} />;
      })}
    </div>
  );
}

export default ProductItemsList;
