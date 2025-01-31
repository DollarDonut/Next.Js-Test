import Image from "next/image";
import styles from './page.module.css'
import Hello, { AboutMe } from "./components/hello";
import Link from "next/link";
import Snoopy from "./img/Snoopy_Peanuts.png"

export default function Home() {
  return (
    <main className={styles.page}>
      {/* Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={25}
            priority
          />
          <ul className={styles.navLinks}>
              <Link href="/">
                Home
              </Link>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className={styles.main}>
        
        <Hello />
        <AboutMe />
        <Image
          src={Snoopy}
          alt="Snoopy van de Peanuts"
          width={100}
        />

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://bendiaby.nl/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Portfolio
          </a>
          <a
            href="https://blog.bendiaby.nl/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Mijn blogsite
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
  
      </footer>
    </main>
  );
}
