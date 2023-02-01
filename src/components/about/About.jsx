import React from "react";
import "./about.css";
import ME from "../../assets/man.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5> Узнать </h5>
      <h2> Обо Мне</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Опыт </h5>
              <small>1,5 года разработки </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Клиенты </h5>
              <small>Общее количество: 10+ </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Проекты </h5>
              <small>25 завершённых проектов </small>
            </article>
          </div>
          <p>
            {" "}
            Я веб-разработчик из Москвы. Люблю учиться и развиваться в сфере
            frontend-разработки, изучая новейшие технологий и документацию на
            английском языке. Готов помочь вам в реализации ваших проектов любой
            сложности, с применением различных технологий и фреймворков. Я могу
            реализовать ваш проект с ипользвоание JavaScript Native, React или
            Vue. При нашем сотрудничестве буду полезен вам как при создании
            простых сайтов визиток или SPA, так и крупных бизнес-проектах.{" "}
          </p>
          <a href="#contacts" className="btn btn-primary">
            Связаться co мной
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
