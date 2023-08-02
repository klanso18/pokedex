function PokemonCard(props) {
    
    console.log(props);
    return (
        <figure>
            <img src={props.imgSrc} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}

export default PokemonCard;