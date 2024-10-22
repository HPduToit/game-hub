import {
  FaWindows,
  FaApple,
  FaPlaystation,
  FaXbox,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
// fa=fontawesome
import { MdPhoneIphone } from 'react-icons/md';
//md=material design
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
//bs=bootstrap
import { Platform } from '../hooks/useGames';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
}

const PlatFormIconList = ({ platforms }: Props) => {
  // the [key: string] is called an index signature
  // We need this since we're specifying a list of keys
  const iconMap: { [key: string]: IconType } = {
    //name: PlayStation
    // slug: playstation  (a slug is like a textual ID)
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    andriod: FaAndroid,
  };

  return (
    <>
      {/* if you set the marginY to a numeric value like marginY={1} this will be a multiple of the theme.space 
            I think the default for chakra is 4px, so passing 1 would leave you with 4px. Otherwise use e.g. 10px */}
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon as={iconMap[platform.slug]} color={'gray.500'}></Icon>
          //   https://v2.chakra-ui.com/docs/styled-system/theme
        ))}
      </HStack>
    </>
  );
};

export default PlatFormIconList;
