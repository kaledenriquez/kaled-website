'use client';

import { useState, useEffect } from "react";
import styles from "@/src/app/styles/navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState<string | null>("home");

    useEffect(() => {
        const sectionIds = ["home", "about", "projects", "skills", "contact"];
        const sections = sectionIds.map(id => document.getElementById(id));
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                }
            });
        }, {
            threshold: 0.1, 
        });

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.navbarList}>
                    <Link onClick={() => setActiveLink("home")} className={styles.navlink} href="/#home">    
                        Home
                        <div className={activeLink === "home" ? styles.activeUnderline : styles.inactiveUnderline}></div>
                    </Link>

                    <Link onClick={() => setActiveLink("about")} className={styles.navlink} href="/#about">    
                        About
                        <div className={activeLink === "about" ? styles.activeUnderline : styles.inactiveUnderline}></div>
                    </Link>

                    <Link onClick={() => setActiveLink("projects")} className={styles.navlink} href="/#projects">    
                        Projects
                        <div className={activeLink === "projects" ? styles.activeUnderline : styles.inactiveUnderline}></div>
                    </Link>

                    <Link onClick={() => setActiveLink("skills")} className={styles.navlink} href="/#skills">    
                        Skills
                        <div className={activeLink === "skills" ? styles.activeUnderline : styles.inactiveUnderline}></div>
                    </Link>

                    <Link onClick={() => setActiveLink("contact")} className={styles.navlink} href="/#contact">    
                        Contact
                        <div className={activeLink === "contact" ? styles.activeUnderline : styles.inactiveUnderline}></div>
                    </Link>                
                </div>
            </nav>
        </div>
    );
}
