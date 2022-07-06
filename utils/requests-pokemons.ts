/* eslint-disable import/no-anonymous-default-export */
export default {
    GetManyPokemons: async (number_who: number) => {

        if(number_who > 31){
            return false
        }
        if(number_who != 0){
            const list: any = []
            var max: number = number_who * 30;
            if( (number_who * 30) > 905 ){
                max = 906
                var min = 900
            }
            else{
                var min = max - 29;
            }

            console.log(min, max)

            while(min < max){
                const respose: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${min}`);
                let json = await respose.json();

                if(json.sprites.other["official-artwork"].front_default === null){
                    json.sprites.other["official-artwork"].front_default = "/img/none_img.png"
                }

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