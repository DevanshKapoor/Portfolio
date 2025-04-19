import { useState } from 'react'
import Navbar from './components/Navbar'
import Me from './components/Me'
import Skills from "./components/Skills"
import About from './components/Stack'
import ProjectsPage from './components/ProjectsPage'
import Contact from './components/Contact'
import ExperienceTimeline from './components/ExperienceTimeline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Me/>
    <Skills/>
    <About/>
    <ProjectsPage/>
    <ExperienceTimeline/>
    <Contact/>
    </>
  )
}

export default App
