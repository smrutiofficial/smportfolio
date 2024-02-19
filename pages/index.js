import React, { useState, useEffect,useRef } from 'react';
import Navbar from './component/Navbar';
import Bottomnav from './component/Bottomnav';
import './css/index.css';
import { MdMusicNote, MdMusicOff } from 'react-icons/md';
import midnight from '../public/assets/sounds/midnight.mp3';

const Index = () => {
  const [ismusic, setIsMusic] = useState(true);
  const audioRef = useRef(null);
  
  useEffect(() => {
    audioRef.current = new Audio(midnight);
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
      <Navbar />
      <Bottomnav />
      <section id='home'>
        <h1 className="hwe">
          Hello world!
        </h1>home
      </section>

      <section id='about'>
        <h1 className="hwe">
          Hello world!
        </h1>about
      </section>

      <section id='skills'>
        <h1 className="hwe">
          Hello world!
        </h1>skills
      </section>

      <section id='gamedev'>
        <h1 className="hwe">
          Hello world!
        </h1>game dev
      </section>

      <section id='project'>
        <h1 className="hwe">
          Hello world!
        </h1>projects
      </section>

      <section id='review'>
        <h1 className="hwe">
          Hello world!
        </h1>testimonials
      </section>

      <section id='made'>
        <h1 className="hwe">
          Hello world!
        </h1>how it's made
      </section>

      <div className='music-toggle' onClick={handlePlayAudio}>
        {ismusic ? <MdMusicOff /> : <MdMusicNote />}
      </div>
    </>
  );
};

export default Index;
