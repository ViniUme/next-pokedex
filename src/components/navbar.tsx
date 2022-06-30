import styles from '../styles/navbar.module.scss';

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <img src="/img/Pokemon-Logo.png" className={styles.logo} />
        </div>
    )
}