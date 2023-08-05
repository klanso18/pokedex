function NavBar({setPokemonIndex}) {
    const handleNext = () => {
        setPokemonIndex((prevIndex) => (prevIndex + 1));
    }
    const handlePrev = () => {
        setPokemonIndex((prevIndex) => (prevIndex - 1));
    }
    return (
        <div>
            <button onClick={handlePrev}>Précédent</button>
            <button onClick={handleNext}>Suivant</button>
        </div>
    )
}

export default NavBar;