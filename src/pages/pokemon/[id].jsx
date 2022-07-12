import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Types from '../../components/types';
import Requests from '../../utils/requests-pokemons';
import Navbar from '../../components/navbar';
import Head from 'next/head'
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
            <>
                <Head>
                    <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
                    <title>Pokemon {pokemon.name} Nº{pokemon.id}</title>
                </Head>

                <Navbar/>

                <div className={`${pokemon.types[0].type.name} ${styles.container}`}>
                    <section className={styles.section}>
                        <div className={styles.main_info}>

                            <span>
                                <h1 className={styles.name}>{pokemon.name} </h1>
                                <h2 className={styles.id}>Nº{pokemon.id}</h2>
                            </span>

                            <span className={styles.types}>
                                <Types types={pokemon.types} />
                            </span>
                        </div>

                        <div className={styles.background_img}>
                            <img className={styles.pokemon_img} alt='' src={`${pokemon.sprites.other["official-artwork"].front_default}`} />
                        </div>
                    </section>
                </div>
            </>
        )
    }
}