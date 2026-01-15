import HeroImg from '../../assets/npc-players.jpg';
import styles from './Hero.module.css';


export default function Hero() {
    return (
        <section
            className={styles.hero}
            style={{ backgroundImage: `url(${HeroImg})` }}
        >
            <div className={styles.heroContent}>
                <h1>SMASH & DINK</h1>
                <p>Where the blame never stops</p>
                {/* <button className="cta-btn">Join Now</button> */}
            </div>
        </section>
    )
}