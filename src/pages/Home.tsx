import { Container, Heading, Stack, Box, Button, VStack } from '@chakra-ui/react';

import { Posts } from '@/sections';
import { PostsForm } from '@/sections/postsForm';

function Home() {
  return (
    <Container>
      <VStack>
        <Button>Я кнопка</Button>
        <Button variant="outline">Я кнопка</Button>
      </VStack>
    </Container>
  );
}

export default Home;
