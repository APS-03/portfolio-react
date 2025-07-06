import React from "react";
import styles from "../styles/Experience.module.css";
import skills from "../data/skills.json";
import education from "../data/education.json";

// ✅ Import skill images
import javaImg from '../assets/skills/java.png';   // Same image for Java, C++, HTML (you can update later)
import cppImg from '../assets/skills/c++.png';
import htmlImg from '../assets/skills/html.png';
import cssImg from '../assets/skills/css.png';
import bootstrapImg from '../assets/skills/bootstrap.png';
import reactImg from '../assets/skills/react.png';
import nodeImg from '../assets/skills/node.png';
import mysqlImg from '../assets/skills/mysql.png';
import mongoImg from '../assets/skills/mongodb.png';
import figmaImg from '../assets/skills/figma.png';

// ✅ Import education images
import schoolImg from '../assets/education/sscboardlogo.png';
import clgImg1 from '../assets/education/msbtelogo.png';
import clgImg2 from '../assets/education/sppulogo.png';

// ✅ Map images to JSON paths
const skillImages = {
  'skills/java.png': javaImg,
  'skills/c++.png': cppImg,
  'skills/html.png': htmlImg,     
  'skills/css.png': cssImg,
  'skills/bootstrap.png': bootstrapImg,
  'skills/react.png': reactImg,
  'skills/node.png': nodeImg,
  'skills/mysql.png': mysqlImg,
  'skills/mongodb.png': mongoImg,
  'skills/figma.png': figmaImg
};

const educationImages = {
  'education/sscboardlogo.png': schoolImg,
  'education/msbtelogo.png': clgImg1,
  'education/sppulogo.png': clgImg2
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills & Education</h2>
      <div className={styles.content}>
        {/* ✅ Skills Section */}
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={skillImages[skill.imageSrc]} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>

        {/* ✅ Education Section */}
        <ul className={styles.history}>
          {education.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <img
                src={educationImages[historyItem.imageSrc]}
                alt={`${historyItem.institute} Logo`}
              />
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}`}</h3>
                <p>{`${historyItem.institute}`}</p>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <p>{`${historyItem.marks}`}</p>
                {/* <ul>
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
