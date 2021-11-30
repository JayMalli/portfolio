import emoji from "react-easy-emoji";
import { Link } from "react-router-dom";
export default function Intro() {
  return (
    <section className="intro">
      <div className="intro-details">
        <h1>
          Hello ,I'm jay
          <span className="wave-emoji">{emoji("👋")}</span>
        </h1>
        <p>
          I'm programmer with a huge patience. A passinoate having an experience
          of building Web applications with JavaScript / Reactjs / Nodejs and
          some other cool libraries and frameworks.
          <span className="intro-img for-mobile">
            <img src="/assets/intro.svg" alt="intro" />
          </span>
        </p>
        <ul className="social-media">
          <a
            href="https://github.com/JayMalli"
            target={"_blank"}
            rel="noreferrer"
          >
            <li className="github">
              <i className="fab fa-github"></i>
            </li>
          </a>
          <a
            href="https://www.instagram.com/jaymalli_programmer/"
            target={"_blank"}
            rel="noreferrer"
          >
            <li className="instagram">
              <i className="fab fa-instagram"></i>
            </li>
          </a>
          <a
            href="https://www.facebook.com/jay.malli.56/"
            target={"_blank"}
            rel="noreferrer"
          >
            <li className="facebook">
              <i className="fab fa-facebook-f"></i>
            </li>
          </a>
          <a
            href="mailto:mallijay747@gmail.com"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <li className="mail">
              <i className="far fa-envelope"></i>
            </li>
          </a>
        </ul>
        <div className="intro-btns">
          <Link to="/contact">
            <button className="btn contact-btn">contact</button>
          </Link>
          <Link to="/">
            <button className="btn contact-btn">My resume</button>
          </Link>
        </div>
      </div>
      <div className="intro-img for-dektop">
        <img src="/assets/intro.svg" alt="intro" />
      </div>
    </section>
  );
}
