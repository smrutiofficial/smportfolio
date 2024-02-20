import React, { useState, useEffect, useRef } from 'react';
import Navbar from './component/Navbar';
import Bottomnav from './component/Bottomnav';
import './css/index.css';
import { MdMusicNote, MdMusicOff } from 'react-icons/md';
import midnight from '../public/assets/sounds/midnight.mp3';
import Bg from "../public/assets/bgsvg";
import Bgm from "../public/assets/bgmsvg";
// ===========icons-========
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

// import Myself from '../public/assets/myself.js';
const Index = () => {
  const [ismusic, setIsMusic] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(midnight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePlayAudio = () => {
    if (!audioRef.current) return;
    if (ismusic) {
      audioRef.current.play();
      setIsMusic(false);
    } else {
      audioRef.current.pause();
      setIsMusic(true);
    }
  };

  return (
    <>
      <div className='flextyu'>
        <div className='kiop'>
          <Bottomnav activeSection={activeSection} />
        </div>
        <Navbar />
        <div className='kiop2'>
          <div className='social'>
            <ul><AiFillInstagram /></ul>
            <ul><FaTwitter /></ul>
            <ul><FaGithub /></ul>
            <ul><FaLinkedin /></ul>
          </div>
          <section id='home'>
            {/* =============home-=============== */}
            <div className='heroimg'>
              <Bg />
              <Bgm />
              <img id='noise' src='/noise.png' />
              <div className='circle'></div>
              {/* <h1 id='name'>SMRUTI</h1> */}
              <div className='divcon'>
                <h1>SMRUTI</h1>
                <h1>ROUT</h1>
                <p>Full Stack Developer</p>
                <div id='flexbtn'>
                  <button>Hire Me</button>
                  <button>About Me</button>
                </div>
              </div>
              <img id='imgself' src="/myself.png" />
            </div>
          </section>
          <section id='about'>
            <h1 className="hwe">Hello world!</h1>about
          </section>
          <section id='skills'>
            <h1 className="hwe">Hello world!</h1>skills
          </section>
          <section id='gamedev'>
            <h1 className="hwe">Hello world!</h1>game dev
          </section>
          <section id='project'>
            <h1 className="hwe">Hello world!</h1>projects
          </section>
          <section id='review'>
            <h1 className="hwe">Hello world!</h1>testimonials
          </section>
          <section id='made'>
            <h1 className="hwe">Hello world!</h1>how it's made
          </section>
        </div>
      </div>
      <div className='music-toggle' onClick={handlePlayAudio}>
        {ismusic ? <MdMusicOff /> : <MdMusicNote />}
      </div>
    </>
  );
};

export default Index;
