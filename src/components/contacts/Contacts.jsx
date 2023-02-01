import React from "react";
import "./contacts.css";
import { MdOutlineEmail } from "react-icons/md";
import { SlSocialVkontakte } from "react-icons/sl";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_018icxz",
        "template_0a36kxo",
        form.current,
        "1cVJSiA6Kr7X9tCGO"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contacts">
      <h5>Связаться</h5>
      <h2>Со мной</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>insofess@gmail.com</h5>
            <a
              href="mailto:insofess@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Отправить сообщение
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+79015032300</h5>
            <a
              href="https://api.whatsapp.com/send?phone=79015032300"
              target="_blank"
              rel="noreferrer"
            >
              Отправить сообщение
            </a>
          </article>
          <article className="contact__option">
            <SlSocialVkontakte className="contact__option-icon" />
            <h4>ВКонтакте</h4>
            <h5>insofess_developer</h5>
            <a
              href="https://vk.com/id774673063"
              target="_blank"
              rel="noreferrer"
            >
              Отправить сообщение
            </a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Ваше Имя" required />
          <input type="email" name="email" placeholder="Ваш email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Введите Ваше сообщение"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Отправить сообщение
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
