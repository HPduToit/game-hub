import useData from './useData';

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

// const useGames = () => { return useData<Game>('/games');} // this syntax also works
const useGames = () => useData<Game>('/games');


export default useGames;
