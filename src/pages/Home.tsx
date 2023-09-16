import { Container, Heading, Stack, Box } from '@chakra-ui/react';

import { Posts } from '@/sections';
import { PostsForm } from '@/sections/postsForm';

function Home() {
  return (
    <Container>
      <Box position="sticky" top="0" zIndex="1" bg="white" p={2}>
        <Heading>Posts</Heading>
        <PostsForm />
      </Box>
      <Stack mt="4">
        <Posts />
      </Stack>
    </Container>
  );
}

export default Home;
