import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="15px">
      <Image src={logo} alt="logo" boxSize="60px" borderRadius="15px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
