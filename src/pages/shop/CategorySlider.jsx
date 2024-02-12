import { linksArray } from "../../utils/linksArray";
import CategoryLink from "./CategoryLink";

function CategorySlider() {
  return (
    <div className="category-nav">
      {linksArray.map((link) => {
        return <CategoryLink key={link.name} {...link} />;
      })}
    </div>
  );
}

export default CategorySlider;
