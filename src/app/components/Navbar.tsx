'use client';

import { useState } from "react";
import styles from "@/src/app/styles/navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    const [activeLink, setActiveLink] = useState<string | null>("home");

    function handleSetActiveLink(linkId: string) {
        setActiveLink(linkId);
    }

    return (

        <div className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.navbarList}>
                    <Link onClick={() => handleSetActiveLink("home")} className={styles.navlink} href="/#home">    
                        Home
                        <div className={activeLink === "home" ? styles.activeUnderline : styles.inactiveUnderline}></div>
                    </Link>

                    <Link onClick={() => handleSetActiveLink("about")} className={styles.navlink} href="/#about">    
                        About
                        <div className={activeLink === "about" ? styles.activeUnderline : styles.inactiveUnderline}></div>
                    </Link>

                    <Link onClick={() => handleSetActiveLink("projects")} className={styles.navlink} href="/#projects">    
                        Projects
                        <div className={activeLink === "projects" ? styles.activeUnderline : styles.inactiveUnderline}></div>
                    </Link>

                    <Link onClick={() => handleSetActiveLink("skills")} className={styles.navlink} href="/#skills">    
                        Skills
                        <div className={activeLink === "skills" ? styles.activeUnderline : styles.inactiveUnderline}></div>
                    </Link>

                    <Link onClick={() => handleSetActiveLink("contact")} className={styles.navlink} href="/#contact">    
                        Contact
                        <div className={activeLink === "contact" ? styles.activeUnderline : styles.inactiveUnderline}></div>
                    </Link>                


                </div>
            </nav>
        </div>

    );
}
