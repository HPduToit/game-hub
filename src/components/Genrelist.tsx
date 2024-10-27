import {
  Button,
  GenericAvatarIcon,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

/* Components should not know anything about the endpoint or making http requests */
const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
    <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={'5px'}>
          <HStack>
            <Image
              boxSize={'32px'}
              borderRadius={8}
              // the objectFit=cover will scale the image to fill the container while preserving its aspect ratio
              objectFit={'cover'}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            {/* <Text fontSize={'lg'}>{genre.name}</Text> */}
            <Button
              whiteSpace={'normal'}
              textAlign={'left'}
              fontSize={'lg'}
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              variant={'link'}
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
