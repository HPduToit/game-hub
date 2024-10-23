import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image, Text, HStack } from '@chakra-ui/react';
import PlatFormIconList from './PlatFormIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  // becuase the image is bigger than its container, we don't see the round corners on the top.
  // Therefore we need the overflow = hidden
  // The heading fontSize is defined in chakra
  return (
    <Card width='300px' borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
        <HStack justifyContent={'space-between'}>
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatFormIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
