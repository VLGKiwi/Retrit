import './App.css'
import { About } from './components/About/About';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Faq } from './components/Faq/Faq';
import { Form } from './components/Form/Form';
import { Intro } from './components/Intro/Intro';
import { Service } from './components/Service/Sevice';

function App() {
  return (
    <>
      <Intro />
      <About />
      <AboutUs />
      <Service />
      <Form />
      <Faq />
    </>
  )
}

export default App
