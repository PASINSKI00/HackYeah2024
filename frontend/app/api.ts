import axios from 'axios';

const API_BASE_URL = 'https://hackyeah-backend-app-j6942.ondigitalocean.app/api';

export const countTree = async (sum: number) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tree/count/${sum}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tree count:', error);
        throw error;
    }
};