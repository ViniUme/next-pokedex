import Requests from '../../utils/requests-pokemons';
import Card from './card';
import styles from '../styles/pokemons.module.scss';
import { useState, useEffect } from 'react';

export default function Pokemons(): JSX.Element{

    const[list, setList] = useState([])

    useEffect(() => {
        async function RequestPokemons(){
            const response = await Requests.GetManyPokemons();
            console.log(response);
            setList(response);
        }
        RequestPokemons();
    }, [])

    return(
        <div className={styles.pokemons_div}>
            {list && list.map((pokemon: any, key: any) => {
                return(
                    <Card pokemon={pokemon} key={key} />
                )
            })}
        </div>
    )
}