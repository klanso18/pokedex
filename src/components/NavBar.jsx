function NavBar({setPokemonIndex, pokemonList, pokemonIndex}) {
    const handleNext = () => {
        setPokemonIndex((prevIndex) => (prevIndex + 1));
    }
    const handlePrev = () => {
        setPokemonIndex((prevIndex) => (prevIndex - 1));
    }
    return (
        <div>
            {pokemonIndex > 0 ? <button onClick={handlePrev}>Précédent</button> : null}
            {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleNext}>Suivant</button> : null}
        </div>
    )
}

export default NavBar;