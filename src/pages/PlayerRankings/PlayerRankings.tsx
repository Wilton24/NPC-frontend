import styles from "./player-rankings.module.css"

export default function PlayerRankings() {
    return (

        <div className={styles.wrapper}>
            <section className={styles.container}>
                <h1>Player Rankings</h1>
                <table className={styles.rankingsTable}>
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>Age</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>sdfasdf</td>
                            <td>25</td>
                            <td>4124</td>
                        </tr>
                    </tbody>

                </table>
            </section>
        </div>
    )
}