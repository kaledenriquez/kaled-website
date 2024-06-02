import styles from "@/src/app/styles/projects.module.css"
import Image from "next/image"
import Link from "next/link"
import portfolioImage from "@/public/personalPortfolioImage.png";
import learningLimboImage from "@/public/learningLimboImage.png";
import {PiGithubLogoFill, PiBrowsers } from "react-icons/pi";

export default function projects() {
  return (
<>
    <div className={styles.projectsSection}>
            <div className={styles.projectsHeader}> 
                <h1>Major Projects</h1>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.projectsContent}>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>Personal Website</h2>
                        <Image
                        src={portfolioImage}
                        alt="Kaled Enríquez"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        priority={true}
                        placeholder="blur" 
                        />
                    </div>
                    <div className={styles.cardContent}>
                        <p>
                            This is a project I made in my free time to learn more about React and Next.js.
                            It's a personal portfolio website that showcases my skills and projects.
                        </p>

                        <Link className={styles.cardFooter} href="https://github.com/kaledenriquez/kaled-website" target="_blank">
                            <PiGithubLogoFill className={styles.icon}/> 
                            <h3>Check it out on Github</h3>
                        </Link>

                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>Learning Limbo</h2>
                        <Image
                        src={learningLimboImage}
                        alt="Kaled Enríquez"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        priority={true}
                        placeholder="blur"
                        />
                    </div>
                    <div className={styles.cardContent}>
                        <p>
                        Utilization of Next.js and React for the development of the user interface, with
                        implementation of Node.js and Express. App hosted at Vercel, and database at Railway.
                        </p>

                        <p>Integration of a game developed in Unity allowing students to answer quizzes through interactive games, and enables teachers
                        to create and customize their own quizzes.</p>

                        <Link className={styles.cardFooter} href="https://github.com/void-david/desarolho_web" target="_blank">
                        <PiGithubLogoFill className={styles.icon}/> 
                            <h3>Check it out on Github</h3>
                        </Link>

                        <Link className={styles.cardFooter} href="https://learninglimboquizz.vercel.app/" target="_blank">
                        <PiBrowsers className={styles.icon}/> 
                            <h3>Check it out live</h3>
                        </Link>

                    </div>
                </div>

            </div>
        </div>
</>
  )
}


