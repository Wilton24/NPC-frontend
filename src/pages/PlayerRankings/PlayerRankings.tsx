import { useEffect, useState } from "react";
import styles from "./player-rankings.module.css";
import { fetchApi } from "../../api/util";
import PlayerProfileModal from "../../components/Modals/PlayerProfile/PlayerProfileModal";


interface Player {
    id: number;
    image: string;
    name: string;
    age: number;
    points: number;
}


export default function PlayerRankings() {
    const [players, setPlayers] = useState<Player[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);



    useEffect(() => {
        const getPlayers = async () => {
            try {
                const data = await fetchApi<Player[]>("http://localhost:3001/api/players");
                setPlayers(data);
            } catch (error) {
                console.error("Failed to fetch players:", error);
            } finally {
                setLoading(false);
            }
        };

        getPlayers();
    }, []);

    if (loading) return <p>Loading players...</p>;

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
                        {players.map((player, index) => (
                            <tr key={player.id}>
                                <td>{index + 1}</td>
                                <td
                                    className={styles.playerCell}
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    <img src={player.image} className={styles.playerImage} alt="Player Profile" />
                                    <p className={styles.playerName}>{player.name}</p>
                                </td>
                                <td>{player.age}</td>
                                <td>{player.points}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>
                <h1>Sample king</h1>
                <PlayerProfileModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    playerName="Sample King"
                    stats={{ level: 99, rank: "Champion" }}
                />
            </section>
        </div>
    )
}