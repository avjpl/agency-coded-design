import React, { useEffect } from 'react';
import gsap from 'gsap';

import IntroOverlay from './components/introOverlay';
import Header from './components/header';
import Banner from './components/banner';
import Cases from './components/cases';

import './styles/App.scss';

function App() {
  useEffect(() => {
    const resizeCb = () => {
      let vh = window.innerHeight * .01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.addEventListener('resize', resizeCb);

    return () => window.removeEventListener('resize', resizeCb);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    // prevents flashing
    gsap.to('body', 0, {css: { visibility: 'visible' }});

    tl.from('.line span', 1.8, {
      y: 100,
      ease: 'power4.out',
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3,
      },
    })
    .to('.overlay-top', 1.6, {
      height: 0,
      ease: 'expo.inOut',
      stagger: 0.4,
    })
    .to('.overlay-bottom', 1.6, {
      width: 0,
      ease: 'expo.inOut',
      delay: -0.8,
      stagger: {
        amount: 0.4,
      },
    })
    .to('.intro-overlay', 0, {css: {display: 'none'}})
    .from('.case-image img', 1.6, {
      scale: 1.4,
      ease: 'expo.inOut',
      delay: -2,
      stagger: {
        amount: 0.4,
      },
    });
  }, []);

  return (
    <div className='App'>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
