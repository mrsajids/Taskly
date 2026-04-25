import React from 'react'
import '../styles/navbar.css'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <span className="navbar-logo">✓</span>
                    <h1 className="navbar-title">Taskly</h1>
                </div>
                <ul className="navbar-menu">
                    <li><a href="#home" className="nav-link active">Home</a></li>
                    <li><a href="#tasks" className="nav-link">Tasks</a></li>
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li>  <ThemeToggle /></li>
                              

                </ul>
            </div>
        </nav>
    )
}

export default Navbar
