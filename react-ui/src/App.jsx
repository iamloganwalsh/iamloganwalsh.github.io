import './App.css'
import { Navbar } from './components/Navbar'
import { Intro } from './components/Intro'
import { About } from './components/About'
import { Projects } from './components/Projects'

function App() {


  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Projects />
    </>
  )
}

export default App
