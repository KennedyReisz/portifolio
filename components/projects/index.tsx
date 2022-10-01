// Import's
import Image from "next/image";

// Asset's
import styles from "./Projects.module.css"
import next from "../../assets/languages/next.svg";
import ts from "../../assets/languages/ts.svg";
import js from "../../assets/languages/js.svg";
import html from "../../assets/languages/html.svg";
import css from "../../assets/languages/css.svg";
import nodejs from "../../assets/languages/nodejs.svg";

const Projects = () => {

  function handleGoToProject1() {
    window.location.href = "https://github.com/KennedyReisz/TodoList"
  }

  function handleGoToProject2() {
    window.location.href = "https://github.com/KennedyReisz/Starbucks-Remake"
  }

  function handleGoToProject3() {
    window.location.href = "https://github.com/KennedyReisz/Canil-Project-Nodejs"
  }
  
  return (
    <section className={styles.projects}>
     <h1 data-aos="fade-down" data-aos-duration="2000">Projects</h1>

      <div className={styles.projectsContent}>

        <div data-aos="fade-right" data-aos-duration="3000" className={styles.project1}>
          <div className={styles.projectImage}></div>
          <div className={styles.projectDescription}>
            <h1>Todo-List</h1>
            <div className={styles.technologiesProject}>
              <Image src={next} alt="" />
              <Image src={ts} alt="" />
            </div>

            <button onClick={handleGoToProject1}>Repository</button>
          </div>
        </div>

        <div data-aos="fade-right" data-aos-duration="2500" className={styles.project2}>
          <div className={styles.projectImage}></div>
          <div className={styles.projectDescription}>
            <h1>Starbucks Clone</h1>
            <div className={styles.technologiesProject}>
              <Image src={html} alt="" />
              <Image src={css} alt="" />
            </div>

            <button onClick={handleGoToProject2}>Repository</button>
          </div>
        </div>

        <div data-aos="fade-right" data-aos-duration="1500" className={styles.project3}>
          <div className={styles.projectImage}></div>
          <div className={styles.projectDescription}>
            <h1>Canil</h1>
            <div className={styles.technologiesProject}>
              <Image src={nodejs} alt="" />
              <Image src={ts} alt="" />
            </div>

            <button onClick={handleGoToProject3}>Repository</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
