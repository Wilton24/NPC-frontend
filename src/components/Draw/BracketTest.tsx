import styles from "./BracketTest.module.css";

const flags: Record<string, string> = {
    PH: "🇵🇭",
    US: "🇺🇸",
    JP: "🇯🇵",
    KR: "🇰🇷",
};

export default function BracketTest() {
    return (
        <>
            {/* Match 1 */}
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

            {/* Match 2 */}
            <div className={styles.scoreRowPlayersWrapper}>
                <div className={styles.playerRow}>
                    <p>{flags.US} M. Johnson</p>
                    <div className={styles.scoreWrapper}>
                        <p>6</p>
                        <p>6</p>
                        <p>7</p>
                    </div>
                </div>
                <div className={styles.playerRow}>
                    <p>{flags.JP} T. Sato</p>
                    <div className={styles.scoreWrapper}>
                        <p>4</p>
                        <p>3</p>
                        <p>5</p>
                    </div>
                </div>
            </div>

            {/* Match 3 */}
            <div className={styles.scoreRowPlayersWrapper}>
                <div className={styles.playerRow}>
                    <p>{flags.KR} J. Kim</p>
                    <div className={styles.scoreWrapper}>
                        <p>7</p>
                        <p>6</p>
                        <p>6</p>
                    </div>
                </div>
                <div className={styles.playerRow}>
                    <p>{flags.PH} A. Santos</p>
                    <div className={styles.scoreWrapper}>
                        <p>5</p>
                        <p>4</p>
                        <p>3</p>
                    </div>
                </div>
            </div>

            {/* Match 4 */}
            <div className={styles.scoreRowPlayersWrapper}>
                <div className={styles.playerRow}>
                    <p>{flags.JP} H. Tanaka</p>
                    <div className={styles.scoreWrapper}>
                        <p>6</p>
                        <p>7</p>
                        <p>6</p>
                    </div>
                </div>
                <div className={styles.playerRow}>
                    <p>{flags.US} D. Smith</p>
                    <div className={styles.scoreWrapper}>
                        <p>4</p>
                        <p>5</p>
                        <p>2</p>
                    </div>
                </div>
            </div>
        </>
    );
}
