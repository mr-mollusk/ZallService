import { memo } from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Text,
  Image,
  Heading,
  Stack,
  ButtonGroup,
} from '@chakra-ui/react';
import { IPostProperties } from './post.type';

const Post = memo(function Post({ id, title, description, image, onDelete }: IPostProperties) {
  return (
    <Card>
      <CardBody>
        {image && <Image src={image} alt={image} borderRadius="lg" />}
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text fontSize="xs" color="gray.500">
            № {id}
          </Text>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue" onClick={onDelete}>
            Удалить
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
});

export { Post };
