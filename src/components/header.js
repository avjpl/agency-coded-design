import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import gsap from 'gsap';

import { useWindowSize } from '../hooks';

import { ReactComponent as UpArrow } from '../assets/up-arrow-circle.svg';

let tl = gsap.timeline();

const Header = () => {
  const [menuState, setMentState] = useState({ menuOpened: false });
  const { width, height } = useWindowSize();
  const history = useHistory();

  useEffect(() => {
    history.listen(() => {
      setMentState({ menuOpened: false });
    });

    if (menuState.menuOpened === true) {
      tl.to('body', { duration: 0.01, css: { overflow: 'hidden' } })
        .to('.app', {
          duration: 1,
          y: width <= 654 ? '70vh' : height / 2,
          ease: 'expo.inOut'
        })
        .to('.hamburger-menu span', {
          duration: 0.6,
          delay: -1,
          scaleX: 0,
          transformOrigin: '50% 0%',
          ease: 'expo.inOut',
        })
        .to('#Path_1', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 5,
          },
        })
        .to('#Path_2', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 10,
            strokeDasharray: 20,
          },
        })
        .to('#Line_1', {
          duration: 0.4,
          delay: -0.6,
          css: {
            strokeDashoffset: 40,
            strokeDasharray: 18,
          },
        })
        .to('#circle', {
          duration: 0.6,
          delay: -0.8,
          css: {
            strokeDashoffset: 0,
          },
        })
        .to('.hamburger-menu-close', {
          duration: 0.6,
          delay: -0.8,
          css: {
            display: 'block'
          },
        });
    } else {
      tl.to('.app', {
        duration: 1,
        y: 0,
        ease: 'expo.inOut',
      })
      .to('#circle', {
        duration: 0.6,
        delay: -0.6,
        css: {
          strokeDashoffset: -193,
          strokeDasharray: 227,
        },
      })
      .to('#Path_1', {
        duration: 0.4,
        delay: -0.6,
        css: {
          strokeDashoffset: 10,
          strokeDasharray: 10,
        },
      })
      .to('#Path_2', {
        duration: 0.4,
        delay: -0.6,
        css: {
          strokeDashoffset: 10,
          strokeDasharray: 10,
        },
      })
      .to('#Line_1', {
        duration: 0.4,
        delay: -0.6,
        css: {
          strokeDashoffset: 40,
          strokeDasharray: 40,
        },
      })
      .to('.hamburger-menu span', {
        duration: 0.6,
        delay: -0.6,
        scaleX: 1,
        transformOrigin: '50% 0%',
        ease: 'expo.inOut',
      })
      .to('.hamburger-menu-close', {
        css: {
          display: 'none'
        }
      })
      .to('body', {
        css: {
          overflow: 'auto'
        }
      });
    }
  }, [menuState.menuOpened]);

  const handleMenuOpen = () => {
    setMentState({ menuOpened: true });
  };

  const handleMenuClose = () => {
    setMentState({ menuOpened: false });
  };

  return (
    <div className='header'>
      <div className='container'>
        <div className='row v-center space-between'>
          <div className='logo'>
            <NavLink to='/' exact>AGENCY.</NavLink>
          </div>
          <div className='nav-toggle'>
            <div
              className='hamburger-menu'
              onClick={handleMenuOpen}
            >
              <span></span>
              <span></span>
            </div>
            <div
              className='hamburger-menu-close'
              onClick={handleMenuClose}
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
