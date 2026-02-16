import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const close = () => setMenuOpen(false);

    return (
        <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
            <div className="container">
                <a href="#home" className="navbar-logo">
                    <img src="/images/filter-icon.png" alt="Smart Aqua Technologies" />
                    <span>
                        Smart <span className="logo-highlight">Aqua</span> Technologies <small>by rubesh</small>
                    </span>
                </a>

                <div className={`nav-links${menuOpen ? ' open' : ''}`}>
                    <a href="#home" onClick={close}>Home</a>
                    <a href="#products" onClick={close}>Products</a>
                    <a href="#about" onClick={close}>About</a>
                    <a href="#contact" onClick={close} className="nav-cta">
                        Get a Quote
                    </a>
                </div>

                <button
                    className={`hamburger${menuOpen ? ' open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </div>
        </nav>
    );
}
