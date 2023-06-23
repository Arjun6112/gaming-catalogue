import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="teal"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        id="theme-switch"
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;