import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Projects from './components/Projects';
import Hero from './components/Hero'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Projects />
      <Hero/>

    <Footer/>
    </>
  )
}

export default App;
