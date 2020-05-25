import React, { useEffect, useState } from 'react';

import IntroOverlay from '../components/introOverlay';
import Banner from '../components/banner';
import Cases from '../components/cases';

import { homeAnimation } from '../animations/home';

const Home = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const completeAnimation = () => {
    setAnimationComplete(true);
  }

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

  return (
    <>
      { !animationComplete && <IntroOverlay /> }
      <Banner />
      <Cases />
    </>
  )
}

export default Home
