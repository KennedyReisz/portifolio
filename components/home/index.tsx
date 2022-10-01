// Import's
import Header from "../header";

// Asset's
import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Header />
      
      <div className={styles.home}>
        <h1 className={styles.mainPhrase}>I<span>&#180;</span>m Kennedy<span>!</span></h1>
        <p className={styles.subPhrase}>Full-Stack Developer<span>.</span></p>
      </div>
    </>
  );
};

export default Home;
