import type { LoaderFunctionArgs } from "react-router";

export async function playerLoader({ params }: LoaderFunctionArgs) {
    const playerId = params.id;

    const res = await fetch(`http://localhost:3001/players/${playerId}`);
    if (!res.ok) {
        throw new Response("Player not found", { status: 404 });
    }

    return res.json();
}
