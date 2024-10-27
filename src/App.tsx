import './App.css';
import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

/* We only had two state variables, but as you add more you would like to put all these
  related variables inside an object. For this reason we use what is called a query object pattern. 
  */
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

// This is what our state variables looked like before we made the change to gameQuery which contains all of them
// const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
// const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

function App() {
  // The error Argument of type '{}' is not assignable to parameter of type 'GameQuery | (() => GameQuery)
  // gets thrown when we declare useState<GameQuery({}) without the 'as GameQuery'
  // The reason for this: the compiler does not allow us to assign a empty object to a GameQury object
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  // set the templateAreas to define the layout of the grid
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      // 1fr means one fraction; so our column stretches and takes up all the available space
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <Box paddingLeft={2}>
        <GameHeading gameQuery={gameQuery} />
        {/* The paddingleft lines the PlatformSelector up with the first card */}
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
                // onSelectPlatform={(platform) => setSelectedPlatform(platform)}
              />
            </Box>
            {/* Set to a function that takes the new sortOrder (i.e. first (sortOrder) parameter)
            which causes our app to rerender and it will pass the new gameQuery object to GameGrid */}
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrder={gameQuery.sortOrder}
            ></SortSelector>
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
