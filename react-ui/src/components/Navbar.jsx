import "../styles/Navbar.css"
import { useState } from "react"

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>  
        <header className="NavbarHeader">
            <div className="NavbarController">
                <div className="NavbarLeft">
                    <a href="#Intro" onClick={closeMenu}>Logan Walsh</a>
                </div>

                {/* Hamburger Icon */}
                <button 
                    className={`HamburgerButton ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`NavbarRight ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#About" onClick={closeMenu}>About</a>
                    <a href="#Projects" onClick={closeMenu}>Projects</a>
                    <a href="#Contact" onClick={closeMenu}>Contact</a>
                </div>
            </div>
        </header>

        {/* Overlay for when menu is open */}
        {isMenuOpen && <div className="MenuOverlay" onClick={closeMenu}></div>}
        </>
    )
}