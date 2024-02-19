import React, { useState, useRef, useEffect } from 'react';
import { RiMenu4Fill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { MdSunny } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import './css/nav.css';
// import '../../src/app/globals.css'
import clickSound from '../../public/assets/sounds/select.mp3';
import gsap from 'gsap';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navSecRef = useRef(null);
  const logoRef = useRef(null);
  const logopdRef = useRef(null);
  const logospRef = useRef(null);
  const sunRef = useRef(null);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode2 = () => {
    setIsDarkMode(prevMode => !prevMode);
    // Toggle dark mode by adding/removing Tailwind classes to the body element
    const body = document.querySelector('body');
    body.classList.toggle('dark');
    playClickSound();
  };

  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
    playClickSound();
  };

  const logoElement = logoRef.current;
  const logospElement = logospRef.current;
  const logopdElement = logopdRef.current;
  const sunElement = sunRef.current;

  if (isDarkMode) {
    gsap.to(logoElement, {
      color: 'white',
    });

    gsap.to(logospElement, {
      color: 'white',
    });
    gsap.to(logopdElement, {
      color: 'rgb(253, 165, 1)',
    });
    gsap.to(sunElement, {
      color: 'white',
     
    });
  } else {
    gsap.to(logoElement, {
      color: 'rgb(67, 42, 192)',
    });

    gsap.to(logospElement, {
      color: 'rgb(43, 43, 43)',
    });
    gsap.to(logopdElement, {
      color: 'black',
    });
    gsap.to(sunElement, {
      color: 'black',
    });
  }

  useEffect(() => {
    const navSecElement = navSecRef.current;
    const logoElement = logoRef.current;
    const logospElement = logospRef.current;
    const logopdElement = logopdRef.current;
    const sunElement = sunRef.current;

    if (isMenuOpen) {
      gsap.to(navSecElement, {
        duration: 0.2,
        clipPath: 'circle(141.2% at 100% 0)', delay: 0
      });
      gsap.to(logoElement, {
        color: 'white',
        delay: 0.5
      });

      gsap.to(logospElement, {
        color: 'white',
        delay: 0.5,
      });
      gsap.to(sunElement, {
        color: 'white',
        delay: 0.5,sunElement
      });
      gsap.to(logopdElement, {
        color: 'rgb(253, 165, 1)',
        delay: 0.5,
      });
    } else {
      gsap.to(navSecElement, {
        duration: 0.2,
        clipPath: 'circle(0.0% at 100% 0)', delay: 0
      });
      gsap.to(logoElement, {
        color: 'rgb(67, 42, 192)',
        delay: 2
      });

      gsap.to(logospElement, {
        color: 'rgb(43, 43, 43)',
        delay: 2
      });
      gsap.to(logopdElement, {
        color: 'black',
        delay: 2
      });
      gsap.to(sunElement, {
        color: 'black',
        delay: 2
      });
    }

  }, [isMenuOpen]);


  return (
    <div>
      <nav>
        <div className='logo' ref={logoRef}>Smruti<span ref={logopdRef}>.code</span></div>
        <div className='shower'>
          <div onClick={toggleMode2} className='darkm' ref={sunRef}>
            {isDarkMode ? <MdSunny size={25} /> : <MdDarkMode size={25} />}
          </div>
          <div id='menuicon' onClick={toggleMenu} ref={logospRef}>
            {isMenuOpen ? <LiaTimesSolid/> : <RiMenu4Fill/>}
          </div>
        </div>

      </nav>
      <div className='navsec' ref={navSecRef}>
      </div>
    </div>
  );
};

export default Navbar;
