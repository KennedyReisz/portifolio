// Asset's
import styles from "../styles/404.module.css";

const NotFound = () => {
  setTimeout(() => {
    window.location.href = "/"
  }, 5000)

  return (
    <div className={styles.notFound}>
      <h1>Ops...<br /></h1>
      <h1>Page Not Found! 404.</h1>
      <p>wait redirecting you to Home page...</p>
    </div>
  );
};

export default NotFound;
