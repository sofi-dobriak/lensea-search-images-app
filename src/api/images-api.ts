import axios from 'axios';
import { Image } from '../types/Image';

const BASE_URL = 'https://api.unsplash.com';
const ACCESS_KEY = 'dEMEz_DpVDeOhSxvDLTFrkeN5MzFKm0Q2kTZSlyUKcI';

interface UnsplasResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

export const fetchImages = async (query: string, page: number = 1): Promise<UnsplasResponse> => {
  const response = await axios.get<UnsplasResponse>(`${BASE_URL}/search/photos?`, {
    params: {
      client_id: ACCESS_KEY,
      query: query,
      page: page,
      per_page: 12,
      orientation: 'landscape',
    },
  });
  return response.data;
};
