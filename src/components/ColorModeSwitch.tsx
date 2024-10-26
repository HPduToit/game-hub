import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        colorScheme="green"
      ></Switch>
      <Text whiteSpace={'nowrap'}>Dark Mode</Text>
      {/* The nowrap formats the 'Dark Mode' on one line after inputting the search bar */}
    </HStack>
  );
};

export default ColorModeSwitch;
