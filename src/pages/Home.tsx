import { Center, Container } from '@chakra-ui/react';
import Img1 from '../assets/img/1.jpg';
import Img2 from '../assets/img/2.jpg';
import Img3 from '../assets/img/3.jpg';
import Img4 from '../assets/img/4.jpg';
import Img5 from '../assets/img/5.jpg';
import { Slider } from '@/sections';

function Home() {
  const imageArray = [Img1, Img2, Img3, Img4, Img5];
  return (
    <Center h={'100vh'}>
      <Container minW="container.md">
        <Slider images={imageArray} />
      </Container>
    </Center>
  );
}

export default Home;
