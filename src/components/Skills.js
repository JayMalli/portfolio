export default function Skills() {
  return (
    <section className="skills">
      <h1>My Skills</h1>
      <div className="skills-container">
        <div className="skills-list">
          <h2>Front-end</h2>
          <div className="line"></div>
          <ul>
            <li>
              <i className="fab fa-html5"></i>
              <h3>HTML5</h3>
            </li>
            <li>
              <i className="fab fa-css3-alt"></i>
              <h3>CSS3</h3>
            </li>
            <li>
              <i className="fab fa-sass"></i>
              <h3>SASS</h3>
            </li>
            <li>
              <i className="fab fa-js"></i>
              <h3>JavaScript</h3>
            </li>
          </ul>
        </div>
        <div className="skills-list">
          <h2>Framework</h2>
          <div className="line"></div>
          <ul>
            <li>
              <i className="fab fa-react"></i>
              <h3>ReactJs</h3>
            </li>
            <li>
              <img src="/assets/PWA.png" alt="PWA" className="skill-img pwa" />
              <h3>Progressive Web Application</h3>
            </li>
          </ul>
        </div>
        <div className="skills-list">
          <h2>Back-end</h2>
          <div className="line"></div>
          <ul>
            <li>
              <i className="fab fa-node"></i>
              <h3>NodeJs</h3>
            </li>
          </ul>
        </div>
        <div className="skills-list">
          <h2>Database</h2>
          <div className="line"></div>
          <ul>
            <li>
              <i className="fas fa-fire"></i>
              <h3>firebase</h3>
            </li>
            <li>
              <i className="fas fa-database"></i>
              <h3>sql-database</h3>
            </li>
          </ul>
        </div>
        <div className="skills-list">
          <h2>Programming</h2>
          <div className="line"></div>
          <ul>
            <li>
              <img src="/assets/c.png" alt="c language" className="skill-img" />
              <h3>C</h3>
            </li>
            <li>
              <img
                src="/assets/c++.png"
                alt="c++ language"
                className="skill-img c-plus"
              />
              <h3>C++</h3>
            </li>
            <li>
              <img
                src="/assets/processing.png"
                alt="processing"
                className="skill-img processing"
              />
              <h3>Processing</h3>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
