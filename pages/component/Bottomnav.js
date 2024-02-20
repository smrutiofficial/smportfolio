import React, { useState, useEffect } from 'react';
import './css/btnav.css';
import { GoHomeFill } from "react-icons/go";
import { MdOutlineEmojiPeople } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { MdDiversity3 } from "react-icons/md";
import clickSound from '../../public/assets/sounds/select.mp3';
import Link from 'next/link';
import { useRouter } from 'next/router';



const Bottomnav = () => {
  const [activeItem, setActiveItem] = useState('GoHomeFill');
  const router = useRouter();
  const handleClick = (id) => {
    setActiveItem(id);
    playClickSound();
  };
  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };


  useEffect(() => {
    // Redirect to the home page when the component mounts
    router.push('/');
  }, []);

  return (
    <div>
      

      <div className='btnav'>
        <Link href="#home">
          <ul className={activeItem === 'GoHomeFill' ? 'active' : 'deactive'} onClick={() => handleClick('GoHomeFill')}>
            <GoHomeFill />
          </ul>
        </Link>
        <Link href="#about">
          <ul className={activeItem === 'MdOutlineEmojiPeople' ? 'active' : 'deactive'} onClick={() => handleClick('MdOutlineEmojiPeople')}>
            <MdOutlineEmojiPeople />
          </ul>
        </Link>
        <Link href="#skills">
          <ul className={activeItem === 'MdConstruction' ? 'active' : 'deactive'} onClick={() => handleClick('MdConstruction')}>
            <MdConstruction />
          </ul>
        </Link>
        <Link href="#gamedev">
          <ul className={activeItem === 'FaGamepad' ? 'active' : 'deactive'} onClick={() => handleClick('FaGamepad')}>
            <FaGamepad />
          </ul>
        </Link>
        <Link href="#project">
          <ul className={activeItem === 'AiOutlineCodeSandbox' ? 'active' : 'deactive'} onClick={() => handleClick('AiOutlineCodeSandbox')}>
            <AiOutlineCodeSandbox />
          </ul>
        </Link>
        <Link href="#review">
          <ul className={activeItem === 'MdDiversity3' ? 'active' : 'deactive'} onClick={() => handleClick('MdDiversity3')}>
            <MdDiversity3 />
          </ul>
        </Link>

      </div>

    </div>
  );
}

export default Bottomnav;