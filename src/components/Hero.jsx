import React from "react";

import styles from "../styles/Hero.module.css";
import { getImageUrl } from "../utils";
import heroImg from "../assets/hero/heroImg1.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ashish Sonawane</h1>
        <p className={styles.description}>
          A passionate and detail-oriented Computer Engineering student with a strong foundation in Java and different web development technologies. Reach out if you'd like to learn more!
        </p>
        <a href="https://drive.google.com/file/d/18Do8_c_UYqx7OZxebL1jiUy4j-_8fPhH/view?usp=sharing" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={heroImg}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};