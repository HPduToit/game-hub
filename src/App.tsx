import './App.css';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import Genrelist from './components/GenreList';

function App() {
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
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <Genrelist />
        </GridItem>
      </Show>
      <GridItem area="main" paddingX={5}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
