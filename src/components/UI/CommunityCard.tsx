import styles from "./CommunityCar.module.css";

export default function CommunityCard({ icon, number, text }:
    {
        icon: React.ReactNode;
        number?: string;
        text?: string;
    }) {
    return (
        <div className={styles.communityCard}>
            <p>{icon}</p>
            <p>{number}</p>
            <p>{text}</p>
        </div>
    )
}