import styles from '../styles/card.module.scss';
import Image from 'next/image';
import Types from './types'
import Link from 'next/link';

export default function Card({pokemon}){

    return(
        <Link href={`/pokemon/${pokemon.id}`}>
            <a className={`${styles.card} background_${pokemon.types[0].type.name}`}>
                <div className={styles.image_div}>
                    <Image src={`${pokemon.sprites.other["official-artwork"].front_default}`} width={135} height={135} alt="" />
                </div>
                <span className={styles.name}>{pokemon.species.name}</span>
                
                <div className={styles.types}>
                    <Types types={pokemon.types} />
                </div>
            </a>
        </Link>
    );
}