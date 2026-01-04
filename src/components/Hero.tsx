import HeroImg from '../assets/npc-players.jpg'

export default function Hero() {
    return (
        <div className="hero">
            <img src={HeroImg} alt="Hero Image" />
        </div>
    )
}