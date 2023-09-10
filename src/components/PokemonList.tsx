import { Pokemon } from "../types/Pokemon"
import { PokemonItem } from "./PokemonItem"
export const PokemonList = ({pokemonList}: {pokemonList: Pokemon[]}) => {
    
    return (
        <section className="w-full flex flex-wrap gap-6 place-content-center mt-8">
            {pokemonList?.map((pokemon: Pokemon) => (
                    <PokemonItem pokemon={pokemon} key={pokemon.name}/>
                ))}
        </section>
    )
}