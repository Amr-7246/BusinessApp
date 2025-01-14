import React, {useState, useEffect} from 'react';
import { gsap } from "gsap";
import './Navbar.css';
import {Link} from 'react-scroll';
import Logo from '../../assets/logo/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    // Mobile Menu State
    const [sidenav, setSidenav] = useState(false);

    // Desktop Fixed Menu
    const [sticky, setSticky] = useState(false);

    // Mobile Icon
    const menuIcon = <FontAwesomeIcon icon={faBars} />

    // SideNav
    const sidenavShow = () => {
        setSidenav(!sidenav);
    }

    // Scroll Fixed Navbar
    useEffect(()=>{
        const handleScroll = () => {
            setSticky(window.scrollY > 20);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })


  return (
    <>
    <header id="site_header" className={`${sticky ? "sticky" : ''} `}>
        <div className="container relative">
            <nav className="navbar " id="Navbar">
                {/* *************** */}
                <div className="navbar_brand">
                    <a href="/">
                        <img className='' src={Logo} alt="Logo"/>
                    </a>
                </div>
                {/* *************** */}
                <div className=" group md:hidden cursor-pointer w-[40px] h-[20px] flex flex-col justify-evenly items-end  mr-[20px]" onClick={sidenavShow}>
                    <span className={` ${sidenav? "bg-Color1 w-[100%] h-[2px]":" w-[60%] bg-white "} h-[2px] flex  group-hover:bg-Color1 duration-[1000ms]`}></span>
                    <span className={` ${sidenav? "bg-Color1 w-[100%] h-[2px]":" w-[100%] bg-white "} h-[2px] flex  group-hover:bg-Color1 duration-[1000ms] `}></span>
                    {/* <span className='w-[100%] h-[2px] flex bg-white group-hover:bg-Color1 duration-[1000ms]'></span> */}
                </div>
                {/* *************** */}
                {/* <div className={`menu_items ${sidenav === true ? 'active' : ''}`}> */}
                <div className={`${sidenav ? "top-[130%] left-[60%] w-[30%] h-[200px] " : "top-[50%] left-[90%] w-[1px] h-[1px] rounded-[100%] "} flex items-center justify-center duration-[1000ms] absolute `}>
                    <div class="absolute inset-0 bg-gradient-to-r bg-Color1 blur-[20px] opacity-1 z-[-1]"></div>
                    <ul>
                        <li className={`${ sidenav ? 'opacity-[1] h-[170px] ' : 'opacity-0 h-[0px] '} overflow-hidden text-white flex flex-col  items-center py-5 delay-[100ms] duration-[500ms]`}>
                            <a href="#home" className='mb-3 hover:text-black hover:font-bold hover:ml-3 duration-[500ms] '>Home</a>
                            <a href="#about" className='mb-3 hover:text-black hover:font-bold hover:ml-3 duration-[500ms]'>About US</a>
                            <a href="#services" className='mb-3 hover:text-black hover:font-bold hover:ml-3 duration-[500ms]'>Services</a>
                            <a href="#blog" className='mb-3 hover:text-black hover:font-bold hover:ml-3 duration-[500ms]'>Blog</a>
                            <a href="#contact" className='mb-3 hover:text-black hover:font-bold hover:ml-3 duration-[500ms]'>Contact US</a>
                        </li>
                    </ul>
                </div>
                {/* *************** */}

            </nav>
        </div>

    </header> 
    </>
    
  )
}
