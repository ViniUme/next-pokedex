import styles from '../styles/card.module.scss';
import Image from 'next/image';
import Types from './types'

export default function Card({pokemon}: any): JSX.Element{

    return(
        <div className={`${styles.card} background_${pokemon.types[0].type.name}`}>
            <div className={styles.image_div}>
                <Image src={`${pokemon.sprites.other["official-artwork"].front_default}`} width={150} height={150} alt="" />
            </div>
            <span className={styles.id}>Nº{pokemon.id}</span>
            <span className={styles.name}>{pokemon.species.name}</span>
            
            <div className={styles.types}>
                <Types types={pokemon.types} />
            </div>
        </div>
    );
}