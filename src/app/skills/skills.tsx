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

            </div>
        </div>
</>
    )
}