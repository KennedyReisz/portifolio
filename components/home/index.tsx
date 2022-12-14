// Import's
import Image from "next/image";

// Asset's
import styles from "./Home.module.css";
import profile from "../../assets/profile.jpg";
import github from "../../assets/github.svg";
import discord from "../../assets/discord.svg";

const Home = () => {
  function handleGoToDiscord() {
    window.location.href = "https://discord.com/users/856336317197320222";
  }

  function handleGoToGithub() {
    window.location.href = "https://github.com/KennedyReisz";
  }

  return (
    <div className={styles.home}>
      <div data-aos="flip-down" data-aos-duration="2000" className={styles.profile}>
        <Image height={290} width={240} src={profile} alt="" />
      </div>

      <h1 data-aos="flip-right" data-aos-duration="3000" className={styles.mainPhrase}>
        I<span>&apos;</span>m Kennedy<span>!</span>
      </h1>
      <p data-aos="flip-left" data-aos-duration="3000" className={styles.subPhrase}>
        Full-Stack Developer<span>.</span>
      </p>

      <div data-aos="zoom-in-up" data-aos-duration="1000" className={styles.socials}>
        <div onClick={handleGoToDiscord} className={styles.discord}>
          <Image src={discord} alt="" />
        </div>
        <div onClick={handleGoToGithub} className={styles.github}>
          <Image src={github} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
