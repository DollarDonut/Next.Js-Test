import styles from '../page.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
    return(
        <>
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
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
            <section className={styles.about}>
                Hier komt een about pagina
            </section>
        </>
    )
}