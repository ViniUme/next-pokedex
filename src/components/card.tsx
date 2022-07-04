import styles from '../styles/card.module.scss';
import Image from 'next/image';

export default function Card({pokemon}: any): JSX.Element{

    return(
        <div className={styles.card}>
            <Image src={`${pokemon.sprites.other["official-artwork"].front_default}`} width={150} height={150} alt="" />
        </div>
    );
}