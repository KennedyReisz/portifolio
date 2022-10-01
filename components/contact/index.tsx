// Import's
import { useState } from "react";

// Asset's
import styles from "./Contact.module.css";

const Contact = () => {
  const [contacts, setContacts] = useState(false);

  function handleShowContacts() {
    setContacts(!contacts);
  }

  return (
    <div className={styles.contact}>
      <div data-aos="flip-left" data-aos-duration="2000" className={styles.contactArea}>
        <h1>Have any project in mind ?</h1>
        <button
          style={contacts ? { marginBottom: 32 } : { marginBottom: 0 }}
          onClick={handleShowContacts}
        >
          Contact Me
        </button>
        {contacts ? (
          <div className={styles.contacts}>
            <p>Email: kennedy@gmail.com</p>
            <p>Discord: Kennedy#8204</p>
            <p>
              Github: <a href="https://github.com/KennedyReisz">KennedyReisz</a>
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Contact;
