"use client"

import { useState } from "react"
import Navbar from "./navbar"
import Home from "./home"
import About from "./about"
import Projects from "./projects"
import Contact from "./contact"
import Footer from "./footer"

export default function App() {
  const [activeSection, setActiveSection] = useState("home")

  const handleSetActive = (section) => {
    setActiveSection(section)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 font-mono">
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

