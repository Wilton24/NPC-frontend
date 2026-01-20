import { useRouteError } from "react-router";

export default function PlayerError() {
    const error = useRouteError();
    console.error(error);

    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>Player Not Found</h1>
            <p>{(error as any)?.statusText || "Oops! Something went wrong."}</p>
        </div>
    );
}
