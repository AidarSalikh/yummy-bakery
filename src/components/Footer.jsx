import React from "react";
import "../styles/Footer.css";
import { FaInstagram } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogo } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdPhone, MdLocationOn, MdOutlineLocationOn } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

function Footer() {
  const getYear = (function () {
    return new Date().getFullYear();
  })();

  return (
    <footer className="footer">
      <div>
        <p>lorem something</p>
        <p>lorem something</p>
        <p>lorem something</p>
      </div>
      <div>
        <p>lorem something</p>
        <p>lorem something</p>
        <p>lorem something</p>
      </div>
      <div>
        <h4>Follow us</h4>
        <div className="footer--social-icons">
          <FaInstagram />
          <PiTelegramLogo />
          <FaWhatsapp />
        </div>
      </div>
      <div className="footer--contact-info">
        <p className="footer--contact-info--detail">
          <MdOutlineLocationOn />
          Адрес: г. Казань
        </p>
        <p className="footer--contact-info--detail">
          <MdOutlineMail />
          Email: aaiaiai@gmail.com
        </p>
        <p className="footer--contact-info--detail">
          <FiPhone />
          Тел: 0412939123
        </p>

        <p className="footer--copyright">&#169; {getYear}, Yummy Bakery </p>
      </div>
    </footer>
  );
}

export default Footer;
