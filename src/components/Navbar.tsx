"use client";

import React, { useState } from "react";
import { Menu, MenuItem, HoveredLink } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden block">
                <button
                    onClick={toggleMobileMenu}
                    className="p-2 focus:outline-none focus:ring"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
            </div>

            {/* Full Navbar for Desktop */}
            <div className="hidden md:block">
                <Menu setActive={setActive}>
                    <Link href={"/"}>
                        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
                    </Link>
                    <Link href={"/skills"}>
                        <MenuItem setActive={setActive} active={active} item="My Skills"></MenuItem>
                    </Link>
                    <Link href={"/projects"}>
                        <MenuItem setActive={setActive} active={active} item="My Projects"></MenuItem>
                    </Link>
                    <Link href="/contact">
                        <MenuItem setActive={setActive} active={active} item="Contact Me"></MenuItem>
                    </Link>
                </Menu>
            </div>

            {/* Translucent Overlay for Mobile */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                >
                    <div className="text-center">
                        {/* Close Button for Mobile Menu */}
                        <button
                            onClick={toggleMobileMenu}
                            className="absolute top-4 right-4"
                            aria-label="Close menu"
                        >
                            <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Mobile Menu Items */}
                        <ul className="space-y-6 text-white text-lg">
                            <li>
                                <Link href="/" onClick={toggleMobileMenu}>Home</Link>
                            </li>
                            <li>
                                <Link href="/skills" onClick={toggleMobileMenu}>My Skills</Link>
                            </li>
                            <li>
                                <Link href="/projects" onClick={toggleMobileMenu}>My Projects</Link>
                            </li>
                            <li>
                                <Link href="/contact" onClick={toggleMobileMenu}>Contact Me</Link>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

export default Navbar;
