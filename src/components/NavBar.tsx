import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="logo" boxSize="60px" />
      <Text fontSize="2xl" fontWeight="bold">
        Gaming Catalogue
      </Text>
    </HStack>
  );
};

export default NavBar;
