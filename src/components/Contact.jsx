import React from 'react'
import styles from '../styles/Contact.module.css'

import emailLogo from "../assets/contact/emailIcon.png"
import githubLogo from "../assets/github-light.svg"
import linkedinLogo from "../assets/contact/linkedinIcon.png"

import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id='contact' className={styles.container}>
       <h2 className={styles.title}>Contact</h2>
       <form action="https://formspree.io/f/xvgrnopr" method='post'>
        <div className={styles.formgroup}>
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name='Name' placeholder='Your Name' id='name' required/>
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="email" hidden>Email</label>
          <input type="email" name='Email' placeholder='Your Email' id='name' required/>
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="message" hidden>Message</label>
          <textarea name='Message' placeholder='Your Message' id='message' required/>
        </div>
        <input type="submit" className='hover btn' value='Send' />
       </form>
       <div className={styles.social}>
        <h2>Feel free to reach out</h2>
       </div>
       <ul className={styles.links}>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/ashish-sonawane03"><FaLinkedin/></a>
        </li>
        <li className={styles.link}>
          <a href="https://github.com/APS-03"><FaGithub/></a>
        </li>
        <li className={styles.link}>
          <a href="mailto:sonawaneashish36@gmail.com"><IoMdMail/></a>
        </li>
       </ul>
       <p>&copy; Ashish Sonawane 2025</p>
    </section>
  )
};
