const BASE_URL = import.meta.env.VITE_API_URL;

export async function api(
    url: string,
    options: RequestInit = {}
) {
    const token = localStorage.getItem("token");

    return fetch(`${BASE_URL}${url}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        },
    });
}
