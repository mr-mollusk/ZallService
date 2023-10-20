import { Container, Heading } from '@chakra-ui/react';
import { AuthForm } from '@/sections';

function AuthPage() {
  return (
    <Container>
      <Heading>Авторизация</Heading>
      <AuthForm />
    </Container>
  );
}

export default AuthPage;
