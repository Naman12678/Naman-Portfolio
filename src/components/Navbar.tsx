"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactPageOpen, setIsContactPageOpen] = useState(false);

    // Toggle the mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Open the contact page in mobile view
    const openContactPage = () => {
        setIsContactPageOpen(true);
        setIsMobileMenuOpen(false);
    };

    // Close the contact page
    const closeContactPage = () => {
        setIsContactPageOpen(false);
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
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Contact Me"
                    >
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="https://www.linkedin.com/in/naman-sharma-50588528b/" target="_blank">Linkedin</HoveredLink>
                            <HoveredLink href="https://x.com/NamanSharm31165" target="_blank">X</HoveredLink>
                            <HoveredLink href="https://wa.me/917439342924" target="_blank">Whatsapp</HoveredLink>
                            <HoveredLink href="mailto:namansharma12678@gmail.com">Mail</HoveredLink>
                        </div>
                    </MenuItem>
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
                                <button onClick={openContactPage}>Contact Me</button>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            )}

            {/* Contact Page Overlay for Mobile */}
            {isContactPageOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                >
                    <div className="relative text-center bg-white rounded-lg p-6 shadow-lg dark:bg-black">
                        {/* Close Button for Contact Page */}
                        <button
                            onClick={closeContactPage}
                            className="absolute top-4 right-4"
                            aria-label="Close contact page"
                        >
                            <svg
                                className="w-6 h-6 text-black dark:text-white"
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

                        {/* Contact Links */}
                        <div className="space-y-4">
                            <HoveredLink href="https://www.linkedin.com/in/naman-sharma-50588528b/" target="_blank">Linkedin</HoveredLink>
                            <HoveredLink href="https://x.com/NamanSharm31165" target="_blank">X</HoveredLink>
                            <HoveredLink href="https://wa.me/917439342924" target="_blank">Whatsapp</HoveredLink>
                            <HoveredLink href="mailto:namansharma12678@gmail.com">Mail</HoveredLink>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

export default Navbar;
