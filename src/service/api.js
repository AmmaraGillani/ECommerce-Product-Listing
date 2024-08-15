import axios from 'axios';

const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; // Rethrow the error so it can be caught in the component
    }
}; 