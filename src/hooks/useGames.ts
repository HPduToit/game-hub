import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
  // The parent_platform is not a Playform[] (platform array)
  // It is a array of objects where each object has a property called platform of type Platform
}

interface FetechGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  // The correct way to setLoading(false) would be inside the .final method,
  // but this does not work with the strict mode turned on, so we do it inside
  // the callback
  useEffect(() => {
    const controller = new AbortController();
    
    setLoading(true);
    // for the instance of CanceltedError bit refer to 10 - creating a custom Hook for Fetching Games 04:30
    apiClient
      .get<FetechGamesResponse>('/games', { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
