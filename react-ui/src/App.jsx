import './App.css'
import { Navbar } from './components/Navbar'
import { Intro } from './components/Intro'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {


  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
