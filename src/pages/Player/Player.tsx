import { useLoaderData, useNavigate } from "react-router";
import styles from "./Player.module.css";

interface PlayerData {
    id: number;
    image: string;
    name: string;
    age: number;
    points: number;
}

export default function Player() {
    const player = useLoaderData() as PlayerData;
    const navigate = useNavigate();

    const skillLevel = (player.points / 1000).toFixed(2);
    const winRate = `${Math.min(90, 50 + Math.floor(player.points / 100))}%`;
    const favoriteShot = "Cross-court dink";
    const location = "Philippines";
    const rank = `#${player.id}`;

    return (
        <div className={styles.page}>
            <button className={styles.backBtn} onClick={() => navigate(-1)}>
                ← Back to Rankings
            </button>

            <div className={styles.card}>
                {/* Header */}
                <div className={styles.header}>
                    <img
                        src={player.image}
                        alt={player.name}
                        className={styles.avatar}
                    />
                    <div>
                        <h1 className={styles.name}>{player.name}</h1>
                        <p className={styles.meta}>
                            Age {player.age} · {location}
                        </p>
                        <span className={styles.rank}>{rank}</span>
                    </div>
                </div>

                {/* Stats */}
                <div className={styles.stats}>
                    <div className={styles.statBox}>
                        <span className={styles.statValue}>{player.points}</span>
                        <span className={styles.statLabel}>Points</span>
                    </div>
                    <div className={styles.statBox}>
                        <span className={styles.statValue}>{skillLevel}</span>
                        <span className={styles.statLabel}>Skill Level</span>
                    </div>
                    <div className={styles.statBox}>
                        <span className={styles.statValue}>{winRate}</span>
                        <span className={styles.statLabel}>Win Rate</span>
                    </div>
                </div>

                {/* Details */}
                <div className={styles.details}>
                    <div className={styles.detailRow}>
                        <strong>Favorite Shot:</strong>
                        <span>{favoriteShot}</span>
                    </div>
                    <div className={styles.detailRow}>
                        <strong>Play Style:</strong>
                        <span>Aggressive Baseline</span>
                    </div>
                    <div className={styles.detailRow}>
                        <strong>Handedness:</strong>
                        <span>Right-handed</span>
                    </div>
                </div>

                {/* Action */}
                <button className={styles.challengeBtn}>
                    Challenge to a Match
                </button>
            </div>
        </div>
    );
}
