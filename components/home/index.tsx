// Import's
import Header from "../header";
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
    <>
      <Header />

      <div className={styles.home}>
        <div className={styles.profile}>
          <Image height={290} width={240} src={profile} alt="" />
        </div>

        <h1 className={styles.mainPhrase}>
          I<span>&#180;</span>m Kennedy<span>!</span>
        </h1>
        <p className={styles.subPhrase}>
          Full-Stack Developer<span>.</span>
        </p>

        <div className={styles.socials}>
          <div onClick={handleGoToDiscord} className={styles.discord}>
            <Image src={discord} alt="" />
          </div>
          <div onClick={handleGoToGithub} className={styles.github}>
            <Image src={github} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
