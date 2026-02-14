import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsActive(!isActive);
    const closeMenu = () => setIsActive(false);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div 
                className={`hamburger ${isActive ? 'active' : ''}`} 
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={`nav-links ${isActive ? 'active' : ''}`}>
                <a href="#" className="active" onClick={closeMenu}>Home</a>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#contact" onClick={closeMenu}>Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;