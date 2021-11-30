import { useState } from "react";
import { Link } from "react-router-dom";
import { header_links } from "../data";
export default function Header() {
  // for navigation menu
  const [show, setShow] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  return (
    <header>
      <div className={`${show ? "hide" : "menu-icon"}`}>
        <i
          className="fas fa-bars"
          onClick={() => {
            setShow(!show);
            setShowCloseIcon(!showCloseIcon);
          }}
        ></i>
      </div>
      <div className="header-logo">
        <Link to="/">
          <div className="logo">
            <p>
              <span className="lessthan">&gt;</span>
              HOME
              <span className="underscore">_</span>
            </p>
          </div>
        </Link>
      </div>
      <ul className={`${show ? "header-tabs show" : "header-tabs"}`}>
        <li
          className={`${showCloseIcon ? "close-icon" : "close-icon hide"}  ${
            show ? "header-skills show-links" : "header-skills"
          }`}
          onClick={() => {
            setShow(!show);
            setShowCloseIcon(!showCloseIcon);
          }}
        >
          <i className="fas fa-times"></i>
        </li>
        {header_links.map((item) => {
          return (
            <li
              className={`${
                show ? "header-skills show-links" : "header-skills"
              }`}
              key={item.id}
            >
              <Link to={item.link}>
                <div className="logo">
                  <p
                    onClick={() => {
                      setShow(false);
                      setShowCloseIcon(false);
                    }}
                  >
                    {item.name}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </header>
  );
}
