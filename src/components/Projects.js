import { projects, language_classes } from "../data";
export default function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((item, index) => {
          return (
            <div className="project" key={index}>
              <h3>
                <span className="project-icon">
                  {/* <img src="/assets/project.svg" alt="Project icon" /> */}
                </span>
                {item.title}
              </h3>
              <div className="project-details">
                <div className="project-info">
                  <p>{item.des}</p>
                  <ul className="tabs">
                    {item.lan.map((language, index) => {
                      let [class_name] = language_classes.filter(
                        (lan) => lan.id === language
                      );
                      let specific_class = "js";
                      if (class_name) {
                        specific_class = class_name.cla;
                      }
                      return (
                        <li key={index}>
                          <div className={`language ${specific_class}`}></div>
                          {language}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="project-links">
                    <a
                      href={item.demo_link}
                      target={true && "_blank"}
                      rel="noreferrer"
                    >
                      <button className="btn project-btn">Demo</button>
                    </a>
                    <a
                      href={item.code_link}
                      target={true && "_blank"}
                      rel="noreferrer"
                    >
                      <button className="btn project-btn">Code</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
