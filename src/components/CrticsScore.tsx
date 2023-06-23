import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticsScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge fontSize="16px" paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticsScore;
