export default function Pokemons(): JSX.Element{

    async function Request(): Promise<void>{
        const respose: Response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        const json: any = await respose.json();
        console.log(json)
    }
    Request();

    return(
        <div>
            
        </div>
    )
}