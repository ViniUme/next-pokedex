/* eslint-disable react-hooks/exhaustive-deps */
import Requests from '../../utils/requests-pokemons';
import Card from './card';
import styles from '../styles/pokemons.module.scss';
import { useState, useEffect } from 'react';

export default function Pokemons(): JSX.Element{

    const[list, setList] = useState([])
    const[who, setWho] = useState(29)

    useEffect(() => {
        async function RequestPokemons(){

            const newPokemons = await Requests.GetManyPokemons(who)

            if(newPokemons === false){
                const observer = document.querySelector("#observer");
                observer.parentNode?.removeChild(observer);
            }
            if(newPokemons != null){
                setList((prevPokemons) => [...prevPokemons, ...newPokemons]);
            }
            else{
                setWho(who + 1)
            }
        }
        RequestPokemons();
    }, [who])

    useEffect(() => {
        const observer: Element | null = document.querySelector("#observer")
    
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)){
                setWho((whoPageInsideState) => whoPageInsideState + 1);
                console.log(who)
            }
        });

        intersectionObserver.observe(observer);

        return () => intersectionObserver.disconnect();
    }, [])

    return(
        <div className={styles.pokemons_div}>
            {list && list.map((pokemon: any, key: any) => {
                return(
                    <Card pokemon={pokemon} key={key} />
                )
            })}

            <div id="observer" className={styles.observer}>
                <span className={styles.loader} />
            </div>

        </div>
    )
}