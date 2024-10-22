import gsap from 'gsap';
import Observer from 'gsap/Observer';
import './App.css'
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Form/Form';
import { Intro } from './components/Intro/Intro';
import { Service } from './components/Service/Sevice';
import { useGSAP } from '@gsap/react';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import cloud from './assets/cloud.png'
import { Fog } from './components/Fog/Fog';
import { AboutUsOne } from './components/AboutUs/AboutUsOne/AboutUsOne';
import { AboutUsTwo } from './components/AboutUs/AboutUsTwo/AboutUsTwo';
import { AboutUsFive } from './components/AboutUs/AboutUsFive/AboutUsFive';
import { AboutUsFour } from './components/AboutUs/AboutUsFour/AboutUsFour';
import { AboutUsThree } from './components/AboutUs/AboutUsThree/AboutUsThree';
import background from './assets/background.png'

gsap.registerPlugin(useGSAP, Observer, ScrollToPlugin)

function App() {

  let arr;
  window.addEventListener('load', function () {
    arr = document.querySelectorAll('.one');
  })
  let currentIndex = 0;

  let animating = false;

  function previous(arr, index) {
    animating = true;

    gsap.to(window, {
      scrollTo: arr[index],
      duration: 1,
      onComplete: () => animating = false
    })

    if (index >= 0) {
      currentIndex = index
    }
  }

  function next(arr, index) {
    animating = true;

    gsap.to(window, {
      scrollTo: arr[index],
      duration: 1,
      onComplete: () => animating = false
    })

    if (index <= 10) {
      currentIndex = index
    }
  }


  Observer.create({
    target: window,
    type: "wheel,touch,pointer",
    onDown: () => !animating && currentIndex <= (arr.length-2) && previous(arr, currentIndex+1),
    onUp: () => !animating && currentIndex >= 1 && next(arr, currentIndex - 1),
  });

  return (
    <div className='background__forest'>
      <div><img src={background} alt="" /></div>
      <div className='cloud' id='cloud'><img src={cloud} alt="" /></div>
      <Fog />
      <div className='one'>
        <Intro />
      </div>
      <div className='one'>
        <About />
      </div>
      <div className="one">
        <AboutUsOne />
      </div>
      <div className="one">
        <AboutUsTwo />
      </div>
      <div className="one">
        <AboutUsThree />
      </div>
      <div className="one">
        <AboutUsFour />
      </div>
      <div className="one">
        <AboutUsFive />
      </div>
      <div className="one">
        <Service />
      </div>
      <div className='one'>
        <Form />
      </div>
      <div className='one'>
        <Footer />
      </div>
    </div>
  )
}

export default App
