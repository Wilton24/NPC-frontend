
export interface Player {
    id: number;
    name: string;
    age: number;
    points: number;
}

export async function fetchApi<T>(url: string, options?: RequestInit): Promise<T> {
    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: T = await response.json();
        return data;
    } catch (error) {
        console.error("API fetch error:", error);
        throw error;
    }
}
