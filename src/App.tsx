import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

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
        <GridItem gridArea="nav" h="100px"></GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" bg="gold" h="100px"></GridItem>
        </Show>
        <GridItem gridArea="main" bg="tomato" h="100px"></GridItem>
      </Grid>
    </>
  );
}

export default App;
