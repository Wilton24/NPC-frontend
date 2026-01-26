import styles from "./UpcomingTournaments.module.css";

const MOCK_TOURNAMENTS = [
    {
        id: 1,
        name: "Naval Open Pickleball Cup",
        date: "March 15, 2026",
        location: "Naval Sports Complex",
        level: "Intermediate – Advanced",
    },
    {
        id: 2,
        name: "Community Friendly Games",
        date: "April 2, 2026",
        location: "Barangay Court 3",
        level: "Beginner Friendly",
    },
    {
        id: 3,
        name: "Summer Smash Tournament",
        date: "May 10, 2026",
        location: "Naval Central Court",
        level: "All Levels",
    },
];

export default function UpcomingTournaments() {
    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h1>Upcoming Tournaments</h1>
                <p>Join our upcoming pickleball tournaments and compete with the community.</p>
            </header>

            <div className={styles.grid}>
                {MOCK_TOURNAMENTS.map((tournament) => (
                    <div key={tournament.id} className={styles.card}>
                        <h2>{tournament.name}</h2>

                        <div className={styles.meta}>
                            <span>📅 {tournament.date}</span>
                            <span>📍 {tournament.location}</span>
                            <span>🏓 {tournament.level}</span>
                        </div>

                        <button className={styles.cta}>
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
