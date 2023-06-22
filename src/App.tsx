import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav " "aside main"`,
      }}
    >
      <GridItem gridArea="nav" bg="coral" h="100px"></GridItem>
      <Show above="lg">
        <GridItem gridArea="aside" bg="gold" h="100px"></GridItem>
      </Show>
      <GridItem gridArea="main" bg="tomato" h="100px"></GridItem>
    </Grid>
  );
}

export default App;
