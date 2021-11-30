import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";
export default function Home() {
  return (
    <div className="container">
      <section className="section">
        <Intro />
      </section>
      <section className="section">
        <Skills />
      </section>
      <section className="section">
        <Projects />
      </section>
      <section className="section">
        <Education />
      </section>
      <section className="section">
        <Contact />
      </section>
    </div>
  );
}
