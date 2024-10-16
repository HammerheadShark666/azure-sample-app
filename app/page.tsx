import styles from "./page.module.css";
import { Metadata } from 'next'
import Link from "next/link";
 
export const metadata: Metadata = {
  title: 'App',
}

export default function Home() { 

  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <h1>Home Page</h1>
          <Link href="/dashboard">Dashboard</Link>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
