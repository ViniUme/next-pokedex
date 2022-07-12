/* eslint-disable @next/next/no-img-element */
import styles from '../styles/navbar.module.scss';
import Link from 'next/link';

export default function Navbar(){
    return(
        <Link href="/">
            <a className={styles.navbar}>
                <img src='/img/Pokemon-Logo.png' alt="" className={styles.soon} />
            </a>
        </Link>
    )
}