function NavBar({setPokemonIndex, pokemonList, pokemonIndex}) {

    const handlePokemon = (index) => {
        setPokemonIndex((pokemonIndex = index));
    }

    return (
        <div>
            {pokemonList.map((pokemon, index) => (
                <button key={pokemon.name} onClick={() => handlePokemon(index)}>{pokemon.name}
                </button>
            ))}
        </div>
    )
}

export default NavBar;