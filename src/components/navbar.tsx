/* eslint-disable @next/next/no-img-element */
import styles from '../styles/navbar.module.scss';

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <img src='/img/Pokemon-Logo.png' alt="" className={styles.soon} />
        </div>
    )
}