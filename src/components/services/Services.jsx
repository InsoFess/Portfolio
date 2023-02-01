import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>Что я предлагаю</h5>
      <h2>Услуги</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3> Web Разработка</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list_icon" />
              <p>
                Разработка SPA приложений с использованием современных
                стандартов
              </p>
            </li>
            <li>
              <BiCheck className="service__list_icon" />
              <p>Использование хуков и классов</p>
            </li>
            <li>
              <BiCheck className="service__list_icon" />
              <p>Разработка на TypeScript</p>
            </li>
            <li>
              <BiCheck className="service__list_icon" />
              <p>Разработка с использованием JavaScript Native</p>
            </li>
            <li>
              <BiCheck className="service__list_icon" />
              <p>Работа с DOM деревом</p>
            </li>

            <li>
              <BiCheck className="service__list_icon" />
              <p>Использование Axios </p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEWELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3> Вёрстка сайта</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list_icon" />
              <p>Адаптивная и кросс-браузерная верстка сайтов;</p>
            </li>
            <li>
              <BiCheck className="service__list_icon" />
              <p>Работа с макетами в Figma</p>
            </li>
            <li>
              <BiCheck className="service__list_icon" />
              <p>Использование Flex / Grid</p>
            </li>
            <li>
              <BiCheck className="service__list_icon" />
              <p> Разработка сайтов по принципу Mobile First</p>
            </li>
            <li>
              <BiCheck className="service__list_icon" />
              <p>Работа с использованием БЭМ / CSS модулей</p>
            </li>
            <li>
              <BiCheck className="service__list_icon" />
              <p>Вёрстка с использованием Sass/Scss/Less</p>
            </li>
          </ul>
        </article>
        {/*END OF CONTENT CREATION*/}
        <article className="service">
          <div className="service__head">
            <h3> Разное</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list_icon" />
              <p>Работа с системой контроля версий (Git)</p>
            </li>
            <li>
              <BiCheck className="service__list_icon" />
              <p>Работа с использованием NPM/Yarn, Webpack</p>
            </li>
            <li>
              <BiCheck className="service__list_icon" />
              <p> Использования линтеров (Eslint, Stylelint)</p>
            </li>

            <li>
              <BiCheck className="service__list_icon" />
              <p>Внутренняя Seo-оптимизация </p>
            </li>
            <li>
              <BiCheck className="service__list_icon" />
              <p>Использование планировщика задач Gulp</p>
            </li>
            <li>
              <BiCheck className="service__list_icon" />
              <p>Чтение документации на английском языке </p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX*/}
      </div>
    </section>
  );
};

export default Services;
