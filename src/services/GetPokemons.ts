import { fetchApi } from "../hooks/Fetch";
import { RequestApi, RequestApiObject } from "../interfaces/RequestApi";
import { Pokemon } from "../types/Pokemon";
import { PokemonRequest } from "../types/PokemonsRequest";

export const getPokemons = async (): Promise<Pokemon[]> => {
    try {
        const res = await fetchApi<RequestApi<PokemonRequest>>('pokemon?limit=10&offset=10');
        const pokemonData: PokemonRequest[] = res.data.results;
        const pokemonPromises: Promise<Pokemon>[] = pokemonData.map(async (pokemon: PokemonRequest) => {
            const poke = await fetchApi<RequestApiObject<Pokemon>>(`pokemon/${pokemon.url.split('/')[6]}`);
            return poke.data;
        });
        const resolvedPokemonData: Pokemon[] = await Promise.all(pokemonPromises);
        return resolvedPokemonData
    } catch (error) {
        throw new Error(`Error al traer los pokemones ${error}`)
    }

}