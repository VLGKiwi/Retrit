import './App.css'
import { About } from './components/About/About';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Intro } from './components/Intro/Intro';
import { Service } from './components/Service/Sevice';

function App() {
  return (
    <>
      <Intro />
      <About />
      <AboutUs />
      <Service />
    </>
  )
}

export default App
