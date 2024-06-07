import styles from "@/src/app/styles/skills.module.css"

export default function Skills(){
    return(
<>
    <div id="skills" className={styles.skillsSection}>
            <div className={styles.skillsHeader}> 
                <h1>My Skills</h1>
                <div className={styles.underline}></div>
            </div>
            <div className={styles.skillsContent}>
                <div className={styles.smallCard}>
                    <h1>Python</h1>
                </div>
                <div className={styles.smallCard}>
                    <h1>Typescript</h1>
                </div>
                <div className={styles.smallCard}>
                    <h1>HTML</h1>
                </div>
                <div className={styles.smallCard}>
                    <h1>CSS</h1>
                </div>
                <div className={styles.smallCard}>
                    <h1>C++</h1>
                </div>
                <div className={styles.smallCard}>
                    <h1>React</h1>
                </div>
                <div className={styles.smallCard}>
                    <h1>Next JS</h1>
                </div>
                <div className={styles.smallCard}>
                    <h1>SQL</h1>
                </div>
                <div className={styles.smallCard}>
                    <h1>NodeJS & Express</h1>
                </div>
                <div className={styles.smallCard}>
                    <h1>Git</h1>
                </div>
            </div>
        </div>
</>
    )
}