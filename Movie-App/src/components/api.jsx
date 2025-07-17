import axios from 'axios';

const API_URL = 'https://www.omdbapi.com/';

export const fetchMovies = async (query) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        s: query,  // Search query
        apiKey: '89875d56',  // Replace with your OMDb API Key
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching movie data:', error);
    return { Error: 'Failed to fetch movies' };
  }
};
