import { Container, Heading, Stack, Box } from '@chakra-ui/react';

import { Posts } from '@/sections';
import { PostsForm } from '@/sections/postsForm';
import { Card } from '@/shared/components/card';

const Home = () => {
  return (
    <Container>
      <Card
        name="Clown"
        imgSrc="https://avatars.mds.yandex.net/i?id=3d4faf33e31100012fcc131451ebee27_l-4034662-images-thumbs&n=13"
        capacity={111}
        square={111}
        price={111}
        address="Улица Ленина Дом Clownселина"
      />

      <Box position="sticky" top="0" zIndex="1" bg="white" p={2}>
        <Heading>Posts</Heading>
        <PostsForm />
      </Box>
      <Stack mt="4">
        <Posts />
      </Stack>
    </Container>
  );
};

export default Home;
