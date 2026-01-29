import BracketTest from "./BracketTest";
import styles from "./BracketLayout.module.css";

export default function BracketLayout() {
    return (
        <div className={styles.bracketWrapper}>
            {/* SVG CONNECTORS */}
            <svg
                className={styles.svg}
                viewBox="0 0 1000 600"
                preserveAspectRatio="none"
            >
                {/* QF → SF */}
                <line x1="250" y1="100" x2="450" y2="200" />
                <line x1="250" y1="300" x2="450" y2="200" />

                <line x1="250" y1="500" x2="450" y2="400" />
                <line x1="250" y1="700" x2="450" y2="400" />

                {/* SF → Final */}
                <line x1="650" y1="200" x2="850" y2="300" />
                <line x1="650" y1="400" x2="850" y2="300" />
            </svg>

            {/* QUARTERFINALS */}
            <div className={styles.round}>
                <h3>Quarterfinals</h3>
                <BracketTest />
                <BracketTest />
                <BracketTest />
                <BracketTest />
            </div>

            {/* SEMIFINALS */}
            <div className={styles.round}>
                <h3>Semifinals</h3>
                <BracketTest />
                <BracketTest />
            </div>

            {/* FINAL */}
            <div className={styles.round}>
                <h3>Final</h3>
                <BracketTest />
            </div>
        </div>
    );
}
