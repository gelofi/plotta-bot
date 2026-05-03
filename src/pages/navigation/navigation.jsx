import { useState, useEffect, useRef } from 'react';
import './navigation.css'; // CSS file
import plotta from '../../assets/plotta.png';

// menu icon themes
const lightMenu = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik0gMCA3LjUgTCAwIDEyLjUgTCA1MCAxMi41IEwgNTAgNy41IFogTSAwIDIyLjUgTCAwIDI3LjUgTCA1MCAyNy41IEwgNTAgMjIuNSBaIE0gMCAzNy41IEwgMCA0Mi41IEwgNTAgNDIuNSBMIDUwIDM3LjUgWiIvPjwvc3ZnPg==";
const invite = 'https://discord.com/oauth2/authorize?client_id=1497873742502690867&permissions=5066826606570560&integration_type=0&scope=bot';

function Nav() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(false); // for the menu hamburger

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };

    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);
    return function() {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function navigationButtons(){
    return(
      <>
        <li><button><a href="#features">Features</a></button></li>
        <li><button><a href="#about">About</a></button></li>
        <li><button><a href={invite} target="_blank" rel="noopener noreferrer">Invite</a></button></li>
      </>
    )
  }

  return (
    <>
      <nav className='navigation-bar'>
        <div className='plotta'>
          <img
            src={plotta}
            alt='Plotta'
          />
          <h1>Plotta</h1>
        </div>
        <ul className='navigation-buttons' ref={dropdownRef}>
          {!isMobile && ( // Desktop Mode
            navigationButtons()
          )}
          {isMobile && ( // Mobile Mode
            <>
              <img
              className="menu"
              id="hamburger"
              src={lightMenu}
              alt="menu"
              onClick={() => setIsOpen(!isOpen)}
            />
            </>
          )}
          {isMobile && isOpen && (
            <div className='mobile-menu'>
              {navigationButtons()}
            </div>
          )}
        </ul>
      </nav>
    </>
  )
}

export default Nav;