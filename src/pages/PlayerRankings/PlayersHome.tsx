import { Outlet } from "react-router-dom";
import Header from "../../components/Header";


export default function PlayersHome() {
    return (
        <>
            <Header />
            <main className="content">
                <Outlet />
            </main>
        </>
    );
}