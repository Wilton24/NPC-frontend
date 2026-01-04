export default function PlayersImage({ imgSrc, imgAlt }:
    { imgSrc: any, imgAlt: string }
) {
    return (
        <img src={imgSrc} alt={imgAlt} />
    )
}