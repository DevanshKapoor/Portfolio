import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Me from './components/Me'
import Skills from "./components/Skills"
import About from './components/Stack'
import ProjectsPage from './components/ProjectsPage'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Me/>
    <Skills/>
    <About/>
    <ProjectsPage/>
    <Contact/>
    </>
  )
}

export default App
