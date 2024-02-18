import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { IconContext } from "react-icons";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { getTotalPrice } from "../features/shop/shopSlice";
import "../styles/Navbar.css";
import { useSelector } from "react-redux";
import useWindowSize from "../hooks/useWindowSize";
import digitFormatter from "../utils/digitFormatter";
import cakeLogo from ".//..//assets/images/cake-logo.png";

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const { width } = useWindowSize();
  const totalPrice = useSelector(getTotalPrice);
  const cartPrice = totalPrice > 0 ? totalPrice : null;
  function handleClick() {
    setOpenNav(!openNav);
  }

  function closeMobileMenu() {
    setOpenNav(false);
  }

  const price = cartPrice ? (
    <span>{digitFormatter(cartPrice)} &#8381;</span>
  ) : (
    ""
  );

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <nav className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src={cakeLogo} alt="" className="navbar-logo--img" />
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            {openNav ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={openNav ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="shop"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Каталог
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                О нас
              </NavLink>
            </li>
            <li className="nav-item cart-icon">
              <NavLink
                to="cart"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                {width < 768 ? (
                  <>
                    Корзина
                    {price}
                  </>
                ) : (
                  <>
                    <IoMdCart size={30} /> {price}
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>

    // <ul className="navbar">
    //   <li>
    //     <Link to="/">Home</Link>
    //   </li>
    //   <li>
    //     <Link to="shop">Shop</Link>
    //   </li>
    //   <li>
    //     <Link to="about">About</Link>
    //   </li>
    //   <li className="cart">
    //     <Link to="cart">Cart</Link>
    //   </li>
    // </ul>
  );
}

export default Nav;
