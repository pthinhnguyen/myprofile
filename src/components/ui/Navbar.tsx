"use client";

import { useState, useEffect } from "react";
import NavLink from "./NavLink";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const toggleMenu = () => {
        if (!isOpen) {
            setIsVisible(true);
            setTimeout(() => {
                setIsOpen(true);
            }, 10); // Small delay to ensure the initial state is rendered
        } else {
            setIsOpen(false);
        }
    };

    // Handle visibility with a delay for closing
    useEffect(() => {
        if (!isOpen) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 300); // Match the duration of the transition (300ms)
            return () => clearTimeout(timer); // Cleanup the timer on unmount or re-run
        }
    }, [isOpen]);

    return (
        <nav className="fixed top-0 w-full bg-white shadow-lg z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <a
                            href="/"
                            className="text-2xl font-bold text-gray-800"
                        >
                            Ted Nguyen
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-8">
                        <li>
                            <NavLink href="#home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink href="#about">About</NavLink>
                        </li>
                        <li>
                            <NavLink href="#projects">Projects</NavLink>
                        </li>
                        <li>
                            <NavLink href="#contact">Contact</NavLink>
                        </li>
                    </ul>

                    {/* Hamburger Menu */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 focus:outline-none"
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={
                                        isOpen
                                            ? "M6 18L18 6M6 6l12 12"
                                            : "M4 6h16M4 12h16M4 18h16"
                                    }
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu with Animation */}
                <div
                    className={`absolute top-16 left-0 w-full bg-white shadow-lg md:hidden transition-all duration-300 ease-in-out ${
                        isVisible ? "block" : "hidden"
                    } ${
                        isOpen
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
                >
                    <ul className="flex flex-col space-y-3 p-4">
                        <li>
                            <NavLink href="#home" onClick={toggleMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="#about" onClick={toggleMenu}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="#projects" onClick={toggleMenu}>
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="#contact" onClick={toggleMenu}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
