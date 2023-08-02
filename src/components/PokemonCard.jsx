import PropTypes from "prop-types";

function PokemonCard({pokemon}) {
    
    console.log(pokemon);
    return (
        <figure>
            {pokemon.imgSrc ? <img src={pokemon.imgSrc} /> : <p>???</p>}
            <figcaption>{pokemon.name}</figcaption>
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