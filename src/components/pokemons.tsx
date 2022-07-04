import Requests from '../../utils/requests-pokemons';

export default function Pokemons(): JSX.Element{

    async function RequestPokemons(){
        const list = await Requests.GetManyPokemons();
        console.log(list)
    }
    RequestPokemons();

    return(
        <div>
            
        </div>
    )
}