import React, { useEffect, useState } from 'react'
import '../styles/themeToggle.css'

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            const dark = savedTheme === 'dark';
            setIsDark(dark);
            applyTheme(dark);
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDark(prefersDark);
            applyTheme(prefersDark);
        }
    }, []);

    const applyTheme = (dark: boolean) => {
        if (dark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    };

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        applyTheme(newTheme);
    };

    return (
        <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
            {isDark ? '🔆' : '🌙'}
        </button>
    )
}

export default ThemeToggle
