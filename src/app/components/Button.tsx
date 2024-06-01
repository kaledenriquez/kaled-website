import styles from "@/src/app/styles/button.module.css"

interface ButtonProps {
    title: string;
    icon?: React.ReactNode; 
}

export default function Button({ title, icon }: ButtonProps) {
    return (
        <div className={styles.standardButton}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <h1>{title ? title : 'Default Title'}</h1>
        </div>
    );
}
