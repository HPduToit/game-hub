import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      {/* The SimpleGrid colums have been set to a object with the extra '{}' 
          This allows you to specify different sizes for differnt deivces  */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}} padding={'10px'} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
