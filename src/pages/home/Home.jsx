import React, { useState } from "react";
import HomePageSlider from "./HomePageSlider";
import { Link } from "react-router-dom";
import Popular from "./Popular";
import Categories from "./Categories";
import Instructions from "./Instructions";

function Home() {
  const [showList, setShowList] = useState("popular");

  const showPopular = () => setShowList("popular");
  const showCategories = () => setShowList("category");

  return (
    <main>
      <HomePageSlider />
      <div className="homepage--buttons-container">
        <button onClick={showPopular}>Популярное</button>
        <button onClick={showCategories}>Категории</button>
      </div>
      <div className="homepage--cards-container">
        {showList === "popular" ? <Popular /> : <Categories />}
      </div>
      <Instructions />
    </main>
  );
}

export default Home;
