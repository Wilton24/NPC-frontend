import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Body from "../components/Body";



export default function RootLayout() {
    return (
        <>
            <Header />
            <Body />
            <main className="content">
                <Outlet />
            </main>
        </>
    );
}