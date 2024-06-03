import Link from "next/link";
import Button from "../components/Button";
import styles from "@/src/app/styles/about.module.css"
import { PiLinkedinLogoFill, PiGithubLogoFill, PiDownloadSimple } from "react-icons/pi";

export default function About() {
  return (
<>
    <div className={styles.socials}>
        <Link className={styles.icon} href="https://www.linkedin.com/in/kaled-enriquez" target="_blank">
            <PiLinkedinLogoFill />
        </Link>
        <Link className={styles.icon} href="https://github.com/kaledenriquez" target="_blank">
            <PiGithubLogoFill />
        </Link>
        <Link style={{textDecoration: 'none'}} href="/kaledEnríquez_Resume.pdf" target="_blank">
            <Button title="Download CV" icon={<PiDownloadSimple />}/>
        </Link>
    </div>

    <div className={styles.aboutSection}>
        <div className={styles.aboutHeader}> 
            <h1>About Me</h1>
            <div className={styles.underline}></div>
        </div>
        <div className={styles.aboutContent}>
            <p>
            {`I'm currently studying computer science at Tecnológico de Monterrey,
                but I'm also a person who loves to learn by himself and keep trying new things.
                I'm always looking for new challenges and opportunities to hone my skills and
                bring the most value I can to the table.

                I am open to freelance work and internship offers, so
                feel free to contact me if you have any project in mind.`}
            </p>
        </div>
    </div>
</>

  )
}


