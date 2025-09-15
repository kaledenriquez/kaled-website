import styles from "@/src/app/styles/projects.module.css"
import Image from "next/image"
import Link from "next/link"
import learningLimboImage from "@/public/learningLimboImage.png";
import Awaq from "@/public/awaq.jpeg"
import dropBydrop from "@/public/dropBydrop.png";

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
                        <h2>AWAQ-BIO Biomonitoring App</h2>
                        <Image
                        src={Awaq}
                        alt="AWAQ"
                        style={{
                            width: '300px',
                            height: 'auto',
                        }}
                        priority={true}
                        placeholder="blur" 
                        />
                    </div>
                    <div className={styles.cardContent}>
                        <p>
                            Mobile App Designed for the AWAQ association’s ”biomonitors” to record
                            observations of animal species on the Tec de Monterrey campus. Integrated Jetpack Compose for UI development.
                        </p>

                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h2>DropByDrop</h2>
                        <Image
                        src={dropBydrop}
                        alt="DropByDrop"
                        style={{
                            width: '300px',
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
                    </div>
                </div>


            </div>
        </div>
</>
  )
}


