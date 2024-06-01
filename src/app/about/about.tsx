import Link from "next/link";
import Button from "../components/Button";
import styles from "@/src/app/styles/about.module.css"
import { PiLinkedinLogoFill, PiGithubLogoFill, PiDownloadSimple } from "react-icons/pi";

export default function About() {
  return (
    <div className={styles.socials}>
        <Link className={styles.icon} href="www.linkedin.com/in/kaled-enriquez">
            <PiLinkedinLogoFill />
        </Link>
        <Link className={styles.icon} href="https://github.com/kaledenriquez">
            <PiGithubLogoFill />
        </Link>
        <Link style={{textDecoration: 'none'}} href="/kaledEnríquez_Resume.pdf">
            <Button title="Download CV" icon={<PiDownloadSimple />}/>
        </Link>
    </div>

    
  )
}


