import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import gsap from 'gsap';
import _debounce from 'lodash.debounce';

// pages
import Home from './pages/home';
import CaseStudies from './pages/caseStudies';
import Approach from './pages/approach';
import Services from './pages/services';
import About from './pages/about';
import Navigation from './components/navigation';

import Header from './components/header';

import './styles/App.scss';

// routes
const routes = [
  {
    path: '/',
    name: 'Home',
    Component: Home,
  },
  {
    path: '/case-studies',
    name: 'Case Studies',
    Component: CaseStudies,
  },
  {
    path: '/approach',
    name: 'Approach',
    Component: Approach,
  },
  {
    path: '/services',
    name: Services,
    Component: Services,
  },
  {
    path: '/about-us',
    name: About,
    Component: About,
  },
];

function App() {
  useEffect(() => {
    const resizeCb = () => {
      let vh = window.innerHeight * .01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.addEventListener('resize', _debounce(resizeCb, 400));

    // prevents flashing
    gsap.to('body', 0, { css: { visibility: 'visible' } });

    return () => window.removeEventListener('resize', resizeCb);
  }, []);

  return (
    <>
      <Header />
      <div className="app">
        {
          routes.map(({path, Component}) => (
            <Route key={path} exact path={path}>
              <Component />
            </Route>
          ))
        }
      </div>
      <Navigation />
    </>
  );
}

export default App;
