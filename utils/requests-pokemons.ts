/* eslint-disable import/no-anonymous-default-export */
export default async () => {
    const respose: Response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const json: any = await respose.json();
    
    return console.log(json)
}