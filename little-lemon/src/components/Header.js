import { useState } from "react";
import littleLemonLogo from '../images/little-lemon-logo.png';
import hamburgerIcon from '../images/hamburger-icon.png';
import './Header.css'

export default function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <header>
            <nav class="navigation">
                <img src={littleLemonLogo} class="nav-logo" alt="Little Lemon Logo" />
                <button
                    class="hamburger"
                    onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                    }}
                >
                    <img src={hamburgerIcon} alt="Hamburger menu icon"  />
                </button>
                <div
                    class={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                    }
                >
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#reservations">Reservations</a></li>
                        <li><a href="#order-online">Order Online</a></li>
                        <li><a href="#login">Login</a></li>
                    </ul>
                </div>
            </nav>

        </header>
    );
};
