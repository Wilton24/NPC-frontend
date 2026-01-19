import { useEffect, useRef } from 'react';
import styles from './PlayerProfileModal.module.css';

interface PlayerProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    playerName: string;
    stats: {
        level: number;
        rank: string;
    };
}

const PlayerProfileModal = ({ isOpen, onClose, playerName, stats }: PlayerProfileModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    // Close when clicking the backdrop
    const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
        if (e.target === dialogRef.current) onClose();
    };

    return (
        <dialog
            ref={dialogRef}
            onClose={onClose}
            onClick={handleBackdropClick}
            className={styles.dialog}
        >
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Player Profile</h2>
                    <button className={styles.closeButton} onClick={onClose}>✕</button>
                </div>

                <div className={styles.content}>
                    <p><strong>Name:</strong> {playerName}</p>
                    <p><strong>Level:</strong> {stats.level}</p>
                    <p><strong>Rank:</strong> {stats.rank}</p>
                </div>

                <div className={styles.footer}>
                    <button onClick={onClose}>Done</button>
                </div>
            </div>
        </dialog>
    );
};

export default PlayerProfileModal;