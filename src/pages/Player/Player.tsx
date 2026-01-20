import { useLoaderData, useNavigate } from "react-router";
import styles from './Player.module.css';



export default function Player() {
    const player = useLoaderData();
    // const navigate = useNavigate();

    // const handleClose = () => {
    //     navigate("/players/rankings");
    // };

    console.log(player);


    return (
        <div className={styles.overlay}>
            <h1>Hello</h1>
        </div>
    );
}
