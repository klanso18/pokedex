import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from './components/PokemonCard'

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const handleNext = () => {
    setPokemonIndex((prevIndex) => (prevIndex + 1));
  }
  const handlePrev = () => {
    setPokemonIndex((prevIndex) => (prevIndex - 1));
  }
  const currentPokemon = pokemonList[pokemonIndex];
  return (
    <div>
      <PokemonCard pokemon={currentPokemon} />
      {pokemonIndex > 0 ? <button onClick={handlePrev}>Précédent</button> : null}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleNext}>Suivant</button> : null}
    </div>
  );
}

export default App;
