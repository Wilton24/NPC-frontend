import { useLoaderData, useNavigate } from "react-router";
import styles from './Player.module.css';

interface PlayerStats {
    skillLevel: number;
    wins: number;
    losses: number;
    winRate: string;
    favoriteShot: string;
}

interface PlayerData {
    id: number;
    name: string;
    avatar: string;
    location: string;
    stats: PlayerStats;
}

export default function Player() {
    const player = useLoaderData() as PlayerData;
    const navigate = useNavigate();

    const handleClose = () => {
        navigate("/players/rankings");
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={handleClose}>&times;</button>

                {/* Header Section */}
                <div className={styles.header}>
                    <img src={player.avatar} alt={player.name} className={styles.avatar} />
                    <div className={styles.headerText}>
                        <h2>{player.name}</h2>
                        <p className={styles.location}>{player.location}</p>
                        <span className={styles.badge}>DUPR {player.stats.skillLevel}</span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>{player.stats.winRate}%</span>
                        <span className={styles.statLabel}>Win Rate</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>{player.stats.wins}</span>
                        <span className={styles.statLabel}>Wins</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>{player.stats.losses}</span>
                        <span className={styles.statLabel}>Losses</span>
                    </div>
                </div>

                {/* Details Section */}
                <div className={styles.details}>
                    <div className={styles.detailRow}>
                        <strong>Favorite Shot:</strong> <span>{player.stats.favoriteShot}</span>
                    </div>
                    <div className={styles.detailRow}>
                        <strong>Preferred Side:</strong> <span>Right (Even)</span>
                    </div>
                </div>

                {/* Action Button */}
                <button className={styles.challengeBtn}>Challenge to a Match</button>
            </div>
        </div>
    );
}
