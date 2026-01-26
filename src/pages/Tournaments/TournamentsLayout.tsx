import { Outlet } from "react-router";
import Header from "../../components/Header/Header";


export default function TournamentsLayout() {
    return (
        <main className="content">
            <Header />
            <Outlet />
        </main>
    );
}