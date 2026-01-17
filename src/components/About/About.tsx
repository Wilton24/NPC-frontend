import CommunityCard from "../UI/CommunityCard";
import { UsersRound, Calendar, MapPin, Trophy } from "lucide-react";
// import npcImg2 from "../assets/images/npc_img2.jpg";
import npcImg2 from "../../assets/images/npc_img2.jpg"
import npcImg4 from "../../assets/images/npc_img4.jpg"
import PlayersImage from "../UI/PlayersImage";
import styles from "./About.module.css";

export default function About() {
    return (
        <section className={styles.aboutSection} id="about-us">
            <div className={styles.leftSection}>
                <div className={styles.aboutDetails}>
                    <h2>About Naval Pickleball Community</h2>
                    <p>
                        Founded in 2022, our pickleball community has grown to become one of
                        the most vibrant and welcoming groups in the area. We're passionate
                        about bringing people together through this amazing sport.

                        Whether you're a complete beginner or a seasoned pro, you'll find
                        your place here. We organize regular games, skill-building clinics,
                        competitive tournaments, and social events throughout the year.
                    </p>
                </div>

                <div className={styles.cardsContainer}>
                    <CommunityCard icon={<UsersRound />} number="100+" text="Active Members" />
                    <CommunityCard icon={<Calendar />} number="50+" text="Events per Month" />
                    <CommunityCard icon={<MapPin />} number="10+" text="Court Locations" />
                    <CommunityCard icon={<Trophy />} number="5+" text="Tournaments Yearly" />
                </div>
            </div>

            <div className={styles.rightSection}>
                <div className={styles.rightSectionText}>
                    <h2>All Levels Welcome</h2>
                    <p>From beginners to advanced players, everyone finds their game here.</p>
                </div>

                <PlayersImage imgSrc={npcImg2} imgAlt="Pickleball players" />
                <PlayersImage imgSrc={npcImg4} imgAlt="Pickleball players" />

                <div className={styles.rightSectionText}>
                    <h2>Community Driven</h2>
                    <p>Train, compete, and grow together in a friendly environment.</p>
                </div>
            </div>
        </section>
    );
}
