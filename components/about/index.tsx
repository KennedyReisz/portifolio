// Import's
import Image from "next/image";

// Asset's
import styles from "./About.module.css";
import aboutImage from "../../assets/aboutImage.png";

const About = () => {
  return (
    <section className={styles.about}>
      <div data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="3000"
        className={styles.aboutContent}>
        <div className={styles.leftSide}>
          <div className={styles.aboutImage}>
            <Image alt="" width={525} height={380} src={aboutImage} />
          </div>
        </div>
        <div className={styles.rightSide}>
          <h2 data-aos="zoom-in-left" data-aos-duration="2000">ABOUT ME</h2>
          <h1 data-aos="zoom-in-left" data-aos-duration="3000">
            I<span>&apos;</span>m Kennedy
          </h1>

          <p data-aos="zoom-in-left" data-aos-duration="3000">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius vero
            pariatur consectetur veritatis nihil consequuntur optio quod in
            labore, et laboriosam accusamus? Doloribus sed illo debitis expedita
            delectus ex quae?
          </p>
          <p data-aos="zoom-in-left" data-aos-duration="3000">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius vero
            pariatur consectetur veritatis nihil consequuntur optio quod in
            labore, et laboriosam accusamus? Doloribus sed illo debitis expedita
            delectus ex quae?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
