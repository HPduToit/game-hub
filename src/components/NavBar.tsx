import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { SearchProps } from './SearchInput';

const NavBar = ({ onSearch }: SearchProps) => {
  return (
    <HStack justifyContent={'space-between'} padding="10px">
      <Image src={logo} boxSize={'60px'} />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;