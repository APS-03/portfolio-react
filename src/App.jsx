import React from 'react'
import styles from './App.module.css'
import { About } from './components/About'
import { Experience } from './components/Experience'
import {Hero} from './components/Hero'
import {Navbar} from './components/Navbar'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {  
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
