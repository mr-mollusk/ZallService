import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Heading>Я домашняя страница, тут пока ничего нет</Heading>
      <Box>
        Чтобы зарегистрировать пользователя - перейди по роуту{' '}
        <Text color="teal.400" fontWeight={700}>
          <Link to="/registration">registration</Link>
        </Text>
      </Box>
      <Box>
        Чтобы авторизоваться - перейди по роуту{' '}
        <Text color="teal.400" fontWeight={700}>
          <Link to="/auth">auth</Link>
        </Text>
      </Box>
    </Container>
  );
}

export default Home;
