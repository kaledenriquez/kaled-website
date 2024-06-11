import styles from "@/src/app/styles/projects.module.css"
import Image from "next/image"
import Link from "next/link"
import portfolioImage from "@/public/personalPortfolioImage.png";
import learningLimboImage from "@/public/learningLimboImage.png";
import dropBydrop from "@/public/dropBydrop.png";
import {PiGithubLogoFill, PiBrowsers } from "react-icons/pi";

//commit de prueba
export default function projects() {
  return (
<>
    <div id="projects" className={styles.projectsSection}>
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
                        </Link>

                    </div>
                </div>


                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>Learning Limbo</h2>
                        <Image
                        src={learningLimboImage}
                        alt="Learning Limbo"
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
                            Dashboard for students and teachers made with Next js, React and SQLite.
                        </p>

                        <p>
                        Integration of a game developed in Unity allowing students to answer quizzes through interactive games, and enables teachers
                        to create and customize their own quizzes.
                        </p>

                        <div className={styles.cardFooter} >
                            <Link href="https://github.com/void-david/desarolho_web" target="_blank">
                                <PiGithubLogoFill className={styles.icon}/> 
                            </Link>

                            <Link href="https://learninglimboquizz.vercel.app/" target="_blank">
                                <PiBrowsers className={styles.icon}/> 
                            </Link>
                        </div>



                    </div>
                </div>


                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>DropByDrop</h2>
                        <Image
                        src={dropBydrop}
                        alt="DropByDrop"
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
                        An application designed to monitor and simulate a water 
                        consumption system, employing Unity, Arduino, MySQL, and Flask technologies. 
                        </p>

                        <Link className={styles.cardFooter} href="https://github.com/kaledenriquez/DropByDrop-System" target="_blank">
                        <PiGithubLogoFill className={styles.icon}/> 
                        </Link>
                    </div>
                </div>


            </div>
        </div>
</>
  )
}


