import styles from "./TournamentBracket.module.css";

type Match = {
    id: number;
    player1: string;
    player2: string;
    score1: number;
    score2: number;
    winner: "player1" | "player2" | null;
};

type Round = {
    name: string;
    matches: Match[];
};

const BRACKET: Round[] = [
    {
        name: "Quarterfinals",
        matches: [
            { id: 1, player1: "Juan", player2: "Mark", score1: 11, score2: 8, winner: "player1" },
            { id: 2, player1: "Paolo", player2: "Leo", score1: 6, score2: 11, winner: "player2" },
        ],
    },
    {
        name: "Semifinals",
        matches: [
            { id: 3, player1: "Juan", player2: "Leo", score1: 11, score2: 9, winner: "player1" },
        ],
    },
    {
        name: "Final",
        matches: [
            { id: 4, player1: "Juan", player2: "TBD", score1: 0, score2: 0, winner: null },
        ],
    },
];

export default function TournamentBracket() {
    return (
        <section className={styles.page}>
            <h1 className={styles.title}>Tournament Draw</h1>

            <div className={styles.bracket}>
                {BRACKET.map((round) => (
                    <div key={round.name} className={styles.round}>
                        <h2>{round.name}</h2>

                        {round.matches.map((match) => (
                            <div key={match.id} className={styles.match}>
                                <div
                                    className={`${styles.player} ${match.winner === "player1" ? styles.winner : ""
                                        }`}
                                >
                                    <span>{match.player1}</span>
                                    <span>{match.score1}</span>
                                </div>

                                <div
                                    className={`${styles.player} ${match.winner === "player2" ? styles.winner : ""
                                        }`}
                                >
                                    <span>{match.player2}</span>
                                    <span>{match.score2}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
