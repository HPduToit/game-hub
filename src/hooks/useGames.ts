import useData from './useData';
import { Genre } from './useGenres';

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

// const useGames = () => { return useData<Game>('/games');} // this syntax also works        || selected genere can be null so we use optional chaning with the '?'
const useGames = (selectedGenre: Genre | null) =>
  useData<Game>('/games', { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
// above I tried with "{selectedGenre}: Genre | null" but the {} give a error: Property 'selectedGenre' does not exist on type 'Genre | null'

export default useGames;
