import React from "react";
import styles from "../styles/ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, image, description, skills, demo, source }
}) => {

  const handleDemoClick = () => {
    window.open(demo, "_blank", "noopener noreferrer"); // Open external link
  };

  return (
    <div className={styles.container}>
      <img
        src={image}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {/* <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a> */}
        <button onClick={handleDemoClick} className={styles.link}>
          Demo
        </button>
        <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
          Source
        </a>
      </div>
    </div>
  );
};
