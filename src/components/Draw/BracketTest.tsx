import styles from "./BracketTest.module.css";

type Props = {
    topRowRef?: React.Ref<HTMLDivElement>;
    bottomRowRef?: React.Ref<HTMLDivElement>;
};

export default function BracketTest({ topRowRef, bottomRowRef }: Props) {
    return (
        <div className={styles.scoreRowPlayersWrapper}>
            <div ref={topRowRef} className={styles.playerRow}>
                <p>🇵🇭 R. Napala</p>
                <div className={styles.scoreWrapper}>
                    <p>6</p>
                    <p>7</p>
                    <p>6</p>
                </div>
            </div>

            <div ref={bottomRowRef} className={styles.playerRow}>
                <p>🇵🇭 J. Dela Cruz</p>
                <div className={styles.scoreWrapper}>
                    <p>2</p>
                    <p>1</p>
                    <p>4</p>
                </div>
            </div>
        </div>
    );
}
