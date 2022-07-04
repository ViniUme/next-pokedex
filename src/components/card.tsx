import styles from '../styles/card.module.scss';
import Image from 'next/image';

export default function Card({pokemon}: any): JSX.Element{

    const get_id:string = `${pokemon.id / 100}`
    const id:string = get_id.replace(".", "");

    console.log(pokemon);
    return(
        <div className={styles.card}>
            <div className={styles.image_div}>
                <Image src={`${pokemon.sprites.other["official-artwork"].front_default}`} width={150} height={150} alt="" />
            </div>
            <span className={styles.id}>#{id}</span>
            <span className={styles.name}>{pokemon.species.name}</span>
            
            <div className={styles.types}>
                
            </div>
        </div>
    );
}