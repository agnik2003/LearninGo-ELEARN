import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  const [scrolling, setScrolling] = useState(false);
  const openTutoringLink = () => {
    // Open the 1-1 Tutoring link
    window.open("https://atulsingh11-0.github.io/Peer-2-Peer-VC/lobby.html", "_blank");
  };

  const whiteBoardLink = () => {
    window.open("https://trex-whiteboard.netlify.app", "_blank");
  };

  const gmeetLink = () => {
    window.open("https://gmeet-mkr9.onrender.com", "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head />
      <header className={scrolling ? "scrolled" : ""}>
        
        <nav className='flexSB'>
          
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {/* <li>
              <Link to='/courses'>All Courses</Link>
            </li> */}
            <li>
              <Link to=''>About</Link>
            </li>
            <li>
              <Link to='' onClick={gmeetLink}>Online Class</Link>
            </li>
            <li>
              <Link to='' onClick={openTutoringLink}>1-1 Tutoring</Link>
            </li>
            {/* <li>
              <Link to=''>Clear Doubts</Link>
            </li> */}
            {/* <li>
              <Link to='' onClick={whiteBoardLink}>White Board</Link>
            </li> */}
            {/* <li>
              <Link to=''>Exam Portal</Link>
            </li> */}
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>QUALITY EDUCATION</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
