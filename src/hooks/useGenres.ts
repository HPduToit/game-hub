// import useData from './useData';
import genres from '../data/genres'

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  // return useData<Genre>('/genres');
  // The below code retrieves the data dynamically; above, statically
  return ({data: genres, isLoading: false, error: null})
};

export default useGenres;
