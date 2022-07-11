import { useRouter } from 'next/router';
import Requests from '../../utils/requests-pokemons';
import { useEffect, useState } from 'react';

export default function IdPokemon(){

    const [pokemon, setPokemon] = useState(undefined);
    const router = useRouter();

    useEffect(() => {
        
        async function LoadInfo(){
            const id = router.query.id;
            const info = await Requests.GetOnePokemon(id);

            setPokemon(info);
        }
        LoadInfo();
    }, [router])

    if(pokemon != undefined){
        return(
            <div>
                <img src={`${pokemon.sprites.other["official-artwork"].front_default}`} />
            </div>
        )
    }
}