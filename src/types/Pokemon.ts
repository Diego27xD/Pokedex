import { AbilitiesPokemon } from "./AbilitiesPokemon"
import { Sprites } from "./SpritesPokemon"
import { TypesPokemon } from "./TypesPokemon"

type Type = {
    slot: number,
    type: TypesPokemon
}

export type Pokemon = {
    name: string,
    abilities: AbilitiesPokemon[],
    sprites: Sprites,
    order: number,
    weight: number,
    base_experience: number,
    types: Type[]
}