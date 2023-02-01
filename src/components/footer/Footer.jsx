import React from "react";
import "./footer.css";
import { FaTelegramPlane } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { BsTwitter } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">
        InsoFess
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Главная</a>
        </li>
        <li>
          <a href="#about">Обо мне</a>
        </li>
        <li>
          <a href="#experience">Мой опыт</a>
        </li>
        <li>
          <a href="#services">Мои услуги</a>
        </li>
        <li>
          <a href="#portfolio">Портфолио</a>
        </li>
        <li>
          <a href="#testimonials">Рекомендации</a>
        </li>
        <li>
          <a href="#contacts">Контакты</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://vk.com/id774673063">
          {" "}
          <SlSocialVkontakte />
        </a>
        <a href="tg://resolve?domain=Insofess">
          {" "}
          <FaTelegramPlane />{" "}
        </a>
        <a href="https://twitter.com/">
          {" "}
          <BsTwitter />{" "}
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Insofess. All rights reserved</small>
      </div>
    </footer>
  );
};

export default footer;
