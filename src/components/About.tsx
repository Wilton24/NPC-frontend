import CommunityCard from "./UI/CommunityCard";

export default function About() {
    return (
        <section>
            <div className="left-section">
                <div className="about-details">
                    <h2>About Naval Pickleball Community</h2>
                    <p>Founded in 2022, our pickleball community has grown to become one of the most vibrant and welcoming groups in the area. We're passionate about bringing people together through this amazing sport.

                        Whether you're a complete beginner or a seasoned pro, you'll find your place here. We organize regular games, skill-building clinics, competitive tournaments, and social events throughout the year.</p>
                </div>

                <div className="cards-container">
                    <CommunityCard />
                    <CommunityCard />
                    <CommunityCard />
                    <CommunityCard />
                </div>

            </div>


            <div className="right-section"></div>
        </section>
    )
}