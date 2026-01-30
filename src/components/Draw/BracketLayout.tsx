import { useEffect, useRef, useState } from "react";
import BracketTest from "./BracketTest";
import styles from "./BracketLayout.module.css";

type Line = {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
};

export default function BracketLayout() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const topRowRef = useRef<HTMLDivElement>(null);
    const bottomRowRef = useRef<HTMLDivElement>(null);

    const [lines, setLines] = useState<Line[]>([]);

    useEffect(() => {
        function calculateLines() {
            if (!wrapperRef.current || !topRowRef.current || !bottomRowRef.current) return;

            const wrapperRect = wrapperRef.current.getBoundingClientRect();
            const topRect = topRowRef.current.getBoundingClientRect();
            const bottomRect = bottomRowRef.current.getBoundingClientRect();

            const startX = topRect.right - wrapperRect.left;
            const topY = topRect.top + topRect.height / 2 - wrapperRect.top;
            const bottomY = bottomRect.top + bottomRect.height / 2 - wrapperRect.top;
            const midX = startX + 20;

            setLines([
                // top horizontal
                { x1: startX, y1: topY, x2: midX, y2: topY },
                // bottom horizontal
                { x1: startX, y1: bottomY, x2: midX, y2: bottomY },
                // vertical connector
                { x1: midX, y1: topY, x2: midX, y2: bottomY },
            ]);
        }

        calculateLines();
        window.addEventListener("resize", calculateLines);
        return () => window.removeEventListener("resize", calculateLines);
    }, []);

    return (
        <div ref={wrapperRef} className={styles.bracketWrapper}>
            <svg className={styles.svg}>
                {lines.map((line, i) => (
                    <line key={i} {...line} />
                ))}
            </svg>

            <div className={styles.round}>
                <h3>Quarterfinals</h3>

                <BracketTest
                    topRowRef={topRowRef}
                    bottomRowRef={bottomRowRef}
                />
            </div>
        </div>
    );
}
