import { Observer } from 'gsap/Observer';
import './App.css'
import { About } from './components/About/About';
import { AboutUs } from './components/AboutUs/AboutUs';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Form/Form';
import { Intro } from './components/Intro/Intro';
import { Service } from './components/Service/Sevice';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

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

    if (index <= 5) {
      currentIndex = index
    }
  }

  Observer.create({
    target: window,
    type: "wheel,touch,pointer",
    onDown: () => !animating && currentIndex <= (arr.length-1) && previous(arr, currentIndex+1),
    onUp: () => !animating && currentIndex >= 1 && next(arr, currentIndex - 1),
  });

  return (
    <>
      <div className='one'>
        <Intro />
      </div>
      <div className='one'>
        <About />
      </div>
      <div className='one'>
        <AboutUs />
      </div>
      <div className='one'>
        <Service />
      </div>
      <div className='one'>
        <Form />
      </div>
      <div className='one'>
        <Footer />
      </div>
    </>
  )
}

export default App
