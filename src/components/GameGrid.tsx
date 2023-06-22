import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCards from "./GameCards";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>error</Text>}
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing="15px"
      >
        {games.map((game) => (
          <GameCards key={game.id} game={game}></GameCards>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
