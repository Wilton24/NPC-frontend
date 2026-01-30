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
                <line x1="253" y1="42" x2="270" y2="42" />
                <line x1="253" y1="78" x2="270" y2="78" />

                <line x1="270" x2="270" y1="42" y2="78" />
            </svg>

            {/* QUARTERFINALS */}
            <div className={styles.round}>
                <h3>Quarterfinals</h3>
                <BracketTest />
                <BracketTest />
                <BracketTest />
                <BracketTest />
            </div>


            {/* <div className={styles.round}>
                <h3>Semifinals</h3>
                <BracketTest />
                <BracketTest />
            </div>

            <div className={styles.round}>
                <h3>Final</h3>
                <BracketTest />
            </div> */}
        </div>
    );
}
