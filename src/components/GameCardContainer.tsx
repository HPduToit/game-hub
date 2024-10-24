import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

/* For a good explination about the width that was 300px and then changed
  to 100% (or the default) listen to 19 - Displaying the Genres 07:40*/
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box width="100%" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
