import axios from "axios"
import { Pokemon } from "../types/Pokemon";
import { TypesPokemon } from "../types/TypesPokemon";
import { getPokemons } from "../services/GetPokemons";
import { getTypesPokemons } from "../services/GetTypesPokemons";


const URL = `https://pokeapi.co/api/v2`

export const fetchApi = async <T>(endPoint: string): Promise<T> => {

    return await axios.get(`${URL}/${endPoint}`);
};

type PokemonData = [Pokemon[], TypesPokemon[]];


export const getDataFromPokemons = async (): Promise<PokemonData> => {
    try {

        const pokemonsData = await getPokemons();
        const typesPokemonData = await getTypesPokemons();
        return [pokemonsData, typesPokemonData]

    } catch (error) {
        console.log(error)
        throw new Error(`Error: ${error}`);
    }
};






/* export const fetchDataPokemon = () => {
    return useQueries([
        {
            queryKey: ['pokemons', 'list'],
            queryFn: (): Promise<Pokemon[]> => fetchApi<RequestApi<Pokemon>>('pokemon?limit=20&offset=20').then(response => response.data.results)
        },
        {
            queryKey: ['types', 'types'],
            queryFn: (): Promise<TypesPokemon[]> => fetchApi<RequestApi<TypesPokemon>>('type').then(response => response.data.results),
        },
    ]);
}; */
