/* eslint-disable import/no-anonymous-default-export */
export default {
    GetManyPokemons: async () => {

        const list: any = []

        for(var i = 1; i < 30; i++){
            const respose: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const json = await respose.json();
            list.push(json);
        }
        return list;
    }
}