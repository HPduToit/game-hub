import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import PlatFormIconList from './PlatFormIconList';


interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  // becuase the image is bigger than its container, we don't see the round corners on the top.
  // Therefore we need the overflow = hidden
  // The heading fontSize is defined in chakra
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <PlatFormIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        ></PlatFormIconList>
      </CardBody>
    </Card>
  );
};

export default GameCard;
