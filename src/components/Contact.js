export default function Contact() {
  return (
    <div className="contact">
      <h1>Reach Out to me!</h1>
      <div className="contact-info">
        <div className="contact-details">
          <p>💬 Contact me, if you have any creative idea or Projects.</p>
          <h2>
            "Web Developer | Creative Coder | Learner | Programmer | Book
            Reader"
          </h2>
          <div className="img_with_name">
            <img src="/assets/profile_img.png" alt="profile" />
            <p>Jay Malli, A passionate Programmer</p>
          </div>
          <p>
            <span>
              <i className="far fa-envelope"></i>
            </span>
            &nbsp; mallijay747@gmail.com
          </p>
          <p>
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            &nbsp; Gujarat , India
          </p>
          <div className="contact-numbers">
            <p>
              <span>
                <i className="fas fa-phone-alt"></i>
              </span>
              &nbsp; 7016857504
            </p>
            <p>
              <span>
                <i className="fab fa-whatsapp"></i>
              </span>
              &nbsp; 9898611497
            </p>
          </div>
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
        </div>
        <div className="contact-avatar">
          <img src="/assets/avatar.jpg" alt="Jay Malli" />
        </div>
      </div>
    </div>
  );
}
