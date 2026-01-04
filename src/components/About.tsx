import CommunityCard from "./UI/CommunityCard";
import { UsersRound } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Trophy } from 'lucide-react';
import npcImg2 from '../assets/images/npc_img2.jpg'
// import npcImg4 from '../assets/images/npc_img4.jpg'
import PlayersImage from "./UI/PlayersImage";

export default function About() {
    return (
        <section className="about-section" id="about-us">
            <div className="left-section">
                <div className="about-details">
                    <h2>About Naval Pickleball Community</h2>
                    <p>Founded in 2022, our pickleball community has grown to become one of the most vibrant and welcoming
                        groups in the area. We're passionate about bringing people together through this amazing sport.

                        Whether you're a complete beginner or a seasoned pro, you'll find your place here. We organize regular
                        games, skill-building clinics, competitive tournaments, and social events throughout the year.</p>
                </div>

                <div className="cards-container">
                    <CommunityCard icon={<UsersRound />} number="100+" text="Active Members" />
                    <CommunityCard icon={<Calendar />} number="50+" text="Events per Month" />
                    <CommunityCard icon={<MapPin />} number="10+" text="Court Locations" />
                    <CommunityCard icon={<Trophy />} number="5+" text="Tournaments Yearly" />
                </div>

            </div>


            <div className="right-section">
                {/* <img src={npcImg2} alt="" />
                <img src={npcImg4} alt="" /> */}
                <PlayersImage imgSrc={npcImg2} imgAlt="Pickleball players" />
            </div>
        </section>
    )
}