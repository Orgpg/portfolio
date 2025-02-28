"use client"

import { useState } from "react"
import Navbar from "./components/navbar"
import Home from "./components/home"
import About from "./components/about"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Footer from "./components/footer"
import './font.css';

export default function App() {
  const [activeSection, setActiveSection] = useState("home")

  const handleSetActive = (section) => {
    setActiveSection(section)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar activeSection={activeSection} setActiveSection={handleSetActive} />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

