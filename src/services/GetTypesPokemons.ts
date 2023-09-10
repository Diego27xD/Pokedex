import { fetchApi } from "../hooks/Fetch";
import { RequestApi } from "../interfaces/RequestApi";
import { TypesPokemon } from "../types/TypesPokemon";

export const getTypesPokemons = async (): Promise<TypesPokemon[]> => {
    try {
        const responseType = await fetchApi<RequestApi<TypesPokemon>>('type');
        const typesPokemons = responseType.data.results as TypesPokemon[];
        return typesPokemons
    } catch (error) {
        throw new Error(`Error al traer los typos de pokemones ${error}`)
    }
}