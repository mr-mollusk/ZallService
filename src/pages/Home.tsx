import { Center, Container } from '@chakra-ui/react';
import { Slider } from '@/sections';
import { sliderMock } from '@/mock';

function Home() {
  return (
    <Center h="100vh">
      <Container minW="container.md">
        <Slider images={sliderMock} />
      </Container>
    </Center>
  );
}

export default Home;
