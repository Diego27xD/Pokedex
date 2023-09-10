import {  useQuery } from "react-query";
import { getDataFromPokemons } from "./hooks/Fetch"
import "./App.css"
import { TypesPokemon } from "./types/TypesPokemon";
import { useState, useEffect } from "react";
import { Pokemon } from "./types/Pokemon";
import { TypesPokemonList } from "./components/TypesList";
import { PokemonList } from "./components/PokemonList";


const App = () => {
  const { data, error, isLoading } = useQuery('pokemons', getDataFromPokemons);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [typeList, setTypeList] = useState<TypesPokemon[]>([]);
  
  useEffect(() => {
    if (data) {
      const [pokemonData, typesPokemons] = data;
      setPokemonList(pokemonData);
      setTypeList(typesPokemons);
    }
  }, [data]);

  
  if(error){
    return <div>Ups ha ocurrido un error...</div>
  }

  if (isLoading) {
    return <div className="loader"></div>;
  }

  
  
  
  return (
    <>
      <div>
        <TypesPokemonList typeList={typeList}/>

        <PokemonList pokemonList={pokemonList}/>
      </div>
      
    </>
  );
};

export default App;