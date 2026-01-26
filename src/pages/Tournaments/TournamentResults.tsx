import styles from "./TournamentResults.module.css";

const MOCK_RESULTS = [
    {
        id: 1,
        name: "Naval Open Pickleball Cup",
        date: "March 15, 2026",
        location: "Naval Sports Complex",
        winners: [
            { position: 1, name: "Juan Dela Cruz" },
            { position: 2, name: "Mark Reyes" },
            { position: 3, name: "Paolo Santos" },
        ],
    },
    {
        id: 2,
        name: "Community Friendly Games",
        date: "February 20, 2026",
        location: "Barangay Court 3",
        winners: [
            { position: 1, name: "Anna Lim" },
            { position: 2, name: "Claire Mendoza" },
            { position: 3, name: "Joy Villanueva" },
        ],
    },
];

export default function TournamentResults() {
    return (
        <section className={styles.page}>
            <header className={styles.header}>
                <h1>Tournament Results</h1>
                <p>View past tournaments and their top performers.</p>
            </header>

            <div className={styles.list}>
                {MOCK_RESULTS.map((tournament) => (
                    <div key={tournament.id} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <h2>{tournament.name}</h2>
                            <span>{tournament.date}</span>
                        </div>

                        <p className={styles.location}>
                            📍 {tournament.location}
                        </p>

                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Place</th>
                                    <th>Player</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tournament.winners.map((winner) => (
                                    <tr key={winner.position}>
                                        <td className={styles.place}>
                                            {winner.position === 1 && "🥇"}
                                            {winner.position === 2 && "🥈"}
                                            {winner.position === 3 && "🥉"}
                                        </td>
                                        <td>{winner.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </section>
    );
}
