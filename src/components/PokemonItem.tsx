import { Pokemon } from "../types/Pokemon"
import { colorType } from "../utils"

export const PokemonItem = ({ pokemon }: { pokemon: Pokemon }) => {
    const typePokemon: string = pokemon.types[0].type.name;
    console.log(typePokemon)
    return (
        <article key={pokemon.name} className={`relative w-1/6 h-96 flex content-center items-center flex-col overflow-hidden rounded-lg bg-${typePokemon}`}>
            <section className="flex flex-row justify-between w-4/5 pt-4 pb-4 items-center text-2xl">
                <h4 className="text-white">{pokemon.name}</h4>
                <h6 className="text-gray-400 font-bold text-end">#{pokemon.base_experience}</h6>
            </section>
            <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="w-2/3 h-2/3 object-fill z-30" />
            <p className={`text-${typePokemon}`}>ASDASDASD</p>
        </article>
    );
};