import React from "react";

import styles from "../styles/About.module.css";
import { getImageUrl } from "../utils";
import aboutImage from "../assets/about/aboutImage.png";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <p className={styles.aboutItems}>
          Hello, I'm Ashish Sonawane born and brought in Dhule. I have completed Degree in Bachelor of Computer Engineering from SPPU (Pune University) and also done Diploma in Computer Engineering. As a Computer Engineering student with a passion for different technologies, my career objective is to leverage my academic knowledge and practical skills to contribute to innovative projects within a dynamic and forward-thinking organization.
        </p>
      </div>
    </section>
  );
};