import HeroImg from '../assets/npc-players.jpg'

export default function Hero() {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${HeroImg})` }}
        >
            <div className="hero-content">
                <h1>SMASH & DINK</h1>
                <p>Where the blame never stops</p>
                {/* <button className="cta-btn">Join Now</button> */}
            </div>
        </section>
    )
}