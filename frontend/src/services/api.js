const BASE_URL = "http://localhost:8080/api";

export const getUsers = async () => {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        if (!response.ok) throw new Error('Erreur lors de la récupération');
        return await response.json();
    } catch (error) {
        console.error("Erreur API:", error);
        return [];
    }
};
