import Navbar from '../components/navbar';
import Pokemons from '../components/pokemons';
import Head from 'next/head';

export default function Index(){
    return(
        <div> 
            <Head>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
                <title>My Next Pokedex</title>
            </Head>
            <Navbar/>
            <Pokemons/>
        </div>
    )
}