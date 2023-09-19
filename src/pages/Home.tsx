import { Container, Heading, Button, VStack, Input } from '@chakra-ui/react';

function Home() {
  return (
    <Container>
      <VStack>
        <Button>Я кнопка</Button>
        <Button variant="outline">Я кнопка</Button>
        <Heading as="h1" size="2xl">
          Я заголовок
        </Heading>
        <Input placeholder="Я инпут" />
      </VStack>
    </Container>
  );
}

export default Home;
