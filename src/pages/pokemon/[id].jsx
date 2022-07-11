import { useRouter } from 'next/router';
import Types from '../../components/types';
import Requests from '../../utils/requests-pokemons';
import { useEffect, useState } from 'react';
import styles from '../../styles/id.module.scss';

export default function IdPokemon(){

    const [pokemon, setPokemon] = useState(undefined);
    const router = useRouter();

    useEffect(() => {
        
        async function LoadInfo(){
            const id = router.query.id;
            const info = await Requests.GetOnePokemon(id);
            console.log(info);
            setPokemon(info);
        }
        LoadInfo();
    }, [router])

    if(pokemon != undefined){
        return(
            <div className={styles.container}>
                <section className={styles.section}>
                    <div className={styles.background_img}>
                        <img className={styles.pokemon_img} alt='' src={`${pokemon.sprites.other["official-artwork"].front_default}`} />
                    </div>

                    <div className={styles.main_info}>

                        <span>
                            <h1 className={styles.name}>{pokemon.species.name}</h1>
                            <h2 className={styles.id}>Nº{pokemon.id}</h2>
                        </span>

                        <span className={styles.types}>
                            <Types types={pokemon.types} />
                        </span>
                    </div>
                </section>
            </div>
        )
    }
}