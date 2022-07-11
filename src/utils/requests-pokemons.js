/* eslint-disable import/no-anonymous-default-export */
const URL = "https://pokeapi.co/api/v2/pokemon/";

export default {
    GetManyPokemons: async (number_who) => {

        if(number_who > 31){
            return false
        }
        if(number_who != 0){
            const list = []
            var max = number_who * 30;
            if( (number_who * 30) > 905 ){
                max = 906
                var min = 900
            }
            else{
                var min = max - 29;
            }

            console.log(min, max)

            while(min < max){
                const respose = await fetch(`${URL}${min}`);
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
    },

    GetOnePokemon: async (id) => {

        if(id != undefined){
            const response = await fetch(`${URL}${id}`)
            const json = await response.json()

            return json
        }
        else{
            return undefined
        }
    }
}