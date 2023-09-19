import { Center, Container } from '@chakra-ui/react';
import { Gallery } from '@/sections';
import { sliderMock } from '@/mock';

function Home() {
  return (
    <Center h="100vh">
      <Container minW="container.md">
        <Gallery images={sliderMock} />
      </Container>
    </Center>
  );
}

export default Home;
