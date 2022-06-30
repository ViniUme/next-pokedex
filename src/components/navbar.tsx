import styles from '../styles/navbar.module.scss';
import Image from 'next/image';

export default function Navbar(){
    return(
        <div className={styles.navbar}>
            <Image src='/img/Pokemon-Logo.png' alt="" width={280} height={130}/>
        </div>
    )
}