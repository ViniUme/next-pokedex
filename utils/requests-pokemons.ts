/* eslint-disable import/no-anonymous-default-export */
export default {
    GetManyPokemons: async (number_who: number) => {

        if(number_who != 0){
            const list: any = []
            const max = number_who * 30;
            var min = max - 29;

            while(min < max){
                const respose: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${min}`);
                const json = await respose.json();

                list.push(json);

                min++;
            }
            return list;
        }
        else{
            return null;
        }
    }
}