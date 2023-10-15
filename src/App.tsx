import { BrowserRouter } from 'react-router-dom';
import { Button, Container, VStack } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { actionCreators } from './store';

export function App() {
  const { changeUserById, getUserById, login, logout } = actionCreators.userActions;

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const handleMakeNewUser = () => {
    dispatch(
      changeUserById({
        id: 26,
        newData: {
          username: 'newName',
          email: '1@no.no',
          first_name: 'newName',
          last_name: 'newName',
          user_agreement: true,
          offer_agreement: true,
          password: '12345678',
          interest: [],
        },
      }),
    );
  };

  const handleLoadUserbyId = () => {
    dispatch(getUserById(26));
    dispatch(
      login({
        username: 'lalala',
        password: '12345687',
      }),
    );
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleConsoleLog = () => {
    console.log(user);
  };

  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      <Container>
        <VStack pt={20}>
          <Button w="100%" onClick={handleMakeNewUser}>
            Создать пользователя
          </Button>
          <Button w="100%" onClick={handleLoadUserbyId}>
            Загрузить токен
          </Button>
          <Button w="100%" onClick={handleLogout}>
            выйти из системы
          </Button>

          <Button w="100%" onClick={handleConsoleLog}>
            Консоль
          </Button>
        </VStack>
      </Container>
    </div>
  );
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
