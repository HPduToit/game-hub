import { Game } from '../hooks/useGames';
import { Card, CardBody, Heading, Image, HStack } from '@chakra-ui/react';
import PlatFormIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  // becuase the image is bigger than its container, we don't see the round corners on the top.
  // Therefore we need the overflow = hidden
  // The heading fontSize is defined in chakra
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={'space-between'} marginBottom={3}>
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatFormIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize={'2xl'}>{game.name}<Emoji rating={game.rating_top}></Emoji></Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
