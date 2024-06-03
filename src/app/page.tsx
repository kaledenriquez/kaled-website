import styles from "./page.module.css";
import Image from "next/image";
import Kaled from "@/public/Kaled.jpg";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.imageContainer}>
      <Image
              src={Kaled}
              alt="Kaled Enríquez"
              style={{
                width: '100%',
                height: 'auto',
              }}
              priority={true}
              placeholder="blur" // Optional blur-up while loading
            />
      </div>

      <div className={styles.textContainer}>
        Hi, I'm
        <h1>Kaled Enríquez</h1>
        <p>
        I'm a Computer Science and Technology student at Tecnológico de Monterrey,
         passionate about software development, web development, and network management.
        </p>
      </div>

    </main>
  );
}
