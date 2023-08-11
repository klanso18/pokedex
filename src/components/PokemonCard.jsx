import PropTypes from "prop-types";

function PokemonCard({pokemon}) {
    
    console.log(pokemon);
    return (
        <figure className="card">
            {pokemon.imgSrc ? <img src={pokemon.imgSrc} className="card-img"/> : <p>???</p>}
            <figcaption>{pokemon.name.toUpperCase()}</figcaption>
        </figure>
    )
}

PokemonCard.propsTypes = {
    pokemon: PropTypes.shape({
        imgSrc: PropTypes.string,
        name: PropTypes.string.isRequired,
    }),
}

export default PokemonCard;