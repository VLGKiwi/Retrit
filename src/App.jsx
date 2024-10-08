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

gsap.registerPlugin(useGSAP, Observer, ScrollToPlugin)

function App() {

  let arr;
  let bgTree;
  window.addEventListener('load', function () {
    arr = document.querySelectorAll('.one');
    bgTree = document.getElementById('background__tree')
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

    console.log(index)
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

    console.log(index)
    if (index <= 10) {
      currentIndex = index
    }
  }


  function moveBackground(e) {
    let offsetX = -170 + (e.clientX / window.innerWidth * 30) - 10;
    let offsetY = -530 + (e.clientY / window.innerHeight * 5) - 10;

    bgTree.setAttribute("style", "background-position: " + offsetX + "px " + offsetY + "px;")
  }


  Observer.create({
    target: window,
    type: "wheel,touch,pointer",
    onDown: () => !animating && currentIndex <= (arr.length-2) && previous(arr, currentIndex+1),
    onUp: () => !animating && currentIndex >= 1 && next(arr, currentIndex - 1),
  });

  document.addEventListener('mousemove', function (e) { moveBackground(e); });

  return (
    <div className='parallax background__forest'>
      <div className='parralax background__tree' id='background__tree'>
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
    </div>
  )
}

export default App
