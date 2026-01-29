import styles from "./TournamentBracket.module.css";

const flags: Record<string, string> = {
    PH: "🇵🇭",
};

export default function TournamentBracket() {
    return (
        <div className={styles.wrapper}>
            {/* SVG LINES */}
            <svg className={styles.lines}>
                <line x1="250" y1="80" x2="350" y2="140" />
                <line x1="250" y1="200" x2="350" y2="140" />
            </svg>

            {/* ROUND 1 */}
            <div className={styles.round}>
                <Match
                    p1="R. Napala"
                    p2="J. Dela Cruz"
                    scores={[6, 7, 6]}
                />
                <Match
                    p1="A. Santos"
                    p2="L. Garcia"
                    scores={[11, 9, 11]}
                />
            </div>

            {/* ROUND 2 */}
            <div className={styles.round}>
                <Match
                    p1="R. Napala"
                    p2="A. Santos"
                    scores={[0, 0, 0]}
                />
            </div>
        </div>
    );
}

function Match({
    p1,
    p2,
    scores,
}: {
    p1: string;
    p2: string;
    scores: number[];
}) {
    return (
        <div className={styles.match}>
            <div className={styles.player}>
                <p>{flags.PH} {p1}</p>
                <div className={styles.scores}>
                    {scores.map((s, i) => (
                        <span key={i}>{s}</span>
                    ))}
                </div>
            </div>

            <div className={styles.player}>
                <p>{flags.PH} {p2}</p>
            </div>
        </div>
    );
}
