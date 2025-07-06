import React from "react";
import styles from "../styles/Projects.module.css";
import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";

// ✅ Import project images
import mahaTrip from '../assets/projects/mahatrip.jpg';
import chatApp from '../assets/projects/chat-app.jpg';
import blog from '../assets/projects/blog.jpg';
import carRental from '../assets/projects/car-rental.jpg';
import regForm from '../assets/projects/registration-form.jpg';
import toDo from '../assets/projects/to-do.jpg';

// ✅ Import project demo videos
//import carRentalVideo from '../assets/projects/RideRent Demo.mp4';
import registrationVideo from '../assets/projects/Registration Form Demo.mp4';

// ✅ Map image paths to imports
const projectImages = {
  'projects/mahatrip.jpg': mahaTrip,
  'projects/chat-app.jpg': chatApp,
  'projects/blog.jpg': blog,
  'projects/car-rental.jpg': carRental,
  'projects/registration-form.jpg': regForm,
  'projects/to-do.jpg': toDo,
};

// ✅ Map video paths to imports
const projectVideos = {
  //'projects/RideRent Demo.mp4': carRentalVideo,
  'projects/Registration Form Demo.mp4': registrationVideo
};
export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {/* {projects.map((project, id) => {
          // ✅ Attach actual image to project data before passing
          const projectWithImage = {
            ...project,
            image: projectImages[project.imageSrc]
          };
          return <ProjectCard key={id} project={projectWithImage} />;
        })} */}
        {projects.map((project, id) => {
          const projectWithMedia = {
            ...project,
            image: projectImages[project.imageSrc],
            demo: projectVideos[project.demo] || project.demo
          };
          return <ProjectCard key={id} project={projectWithMedia} />;
        })}
      </div>
    </section>
  );
};
