import { Container, Heading } from '@chakra-ui/react';
import { RegistrationForm } from '@/sections';

function RegistrationPage() {
  return (
    <Container>
      <Heading>Регистрация</Heading>
      <RegistrationForm />
    </Container>
  );
}

export default RegistrationPage;
