import React from 'react';
import styles from './Player.module.css';

interface PlayerStats {
    skillLevel: number;
    wins: number;
    losses: number;
    winRate: string;
    favoriteShot: string;
}

interface PlayerProps {
    name: string;
    avatar: string;
    location: string;
    stats: PlayerStats;
    onClose: () => void;
}

const Player: React.FC<PlayerProps> = ({ name, avatar, location, stats, onClose }) => {
    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>&times;</button>

                {/* Header Section */}
                <div className={styles.header}>
                    <img src={avatar} alt={name} className={styles.avatar} />
                    <div className={styles.headerText}>
                        <h2>{name}</h2>
                        <p className={styles.location}>{location}</p>
                        <span className={styles.badge}>DUPR {stats.skillLevel}</span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className={styles.statsGrid}>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>{stats.winRate}%</span>
                        <span className={styles.statLabel}>Win Rate</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>{stats.wins}</span>
                        <span className={styles.statLabel}>Wins</span>
                    </div>
                    <div className={styles.statItem}>
                        <span className={styles.statValue}>{stats.losses}</span>
                        <span className={styles.statLabel}>Losses</span>
                    </div>
                </div>

                {/* Details Section */}
                <div className={styles.details}>
                    <div className={styles.detailRow}>
                        <strong>Favorite Shot:</strong> <span>{stats.favoriteShot}</span>
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
};

export default Player;