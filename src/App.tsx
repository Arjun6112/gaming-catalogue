import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <>
      <NavBar />
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav " "aside main"`,
        }}
      >
        <GridItem gridArea="nav"></GridItem>
        <Show above="lg">
          <GridItem gridArea="aside"></GridItem>
        </Show>
        <GridItem gridArea="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
