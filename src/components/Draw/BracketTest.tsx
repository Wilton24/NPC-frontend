import styles from "./BracketTest.module.css";

const flags: Record<string, string> = {
    PH: "🇵🇭",
    US: "🇺🇸",
    JP: "🇯🇵",
    KR: "🇰🇷",
};

export default function BracketTest() {
    return (
        <div className={styles.scoreRowPlayersWrapper}>
            <div className={styles.playerRow}>
                <p>{flags.PH} R. Napala</p>
                <div className={styles.scoreWrapper}>
                    <p>6</p>
                    <p>7</p>
                    <p>6</p>
                </div>
            </div>

            <div className={styles.playerRow}>
                <p>{flags.PH} J. Dela Cruz</p>
                <div className={styles.scoreWrapper}>
                    <p>2</p>
                    <p>1</p>
                    <p>4</p>
                </div>
            </div>
        </div>
    );
}
