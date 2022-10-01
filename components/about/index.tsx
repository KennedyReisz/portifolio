// Import's
import Image from "next/image";

// Asset's
import styles from "./About.module.css";
import aboutImage from "../../assets/aboutImage.png";
import aboutBorder from "../../assets/aboutBorder.svg";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.leftSide}>
          <div className={styles.aboutImage}>
            <Image alt="" width={525} height={380} src={aboutImage} />
          </div>
        </div>
        <div className={styles.rightSide}>
          <h2>ABOUT ME</h2>
          <h1>
            I<span>&apos;</span>m Kennedy
          </h1>

          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
