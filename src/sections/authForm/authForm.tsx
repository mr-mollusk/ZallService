import { Box, Button, FormControl, FormErrorMessage, Input, VStack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginData } from '@/models';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { actionCreators } from '@/store';
import { useErrorToast } from '@/shared';

export function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.user.status);
  const error = useAppSelector((state) => state.user.error);
  useErrorToast(error);
  const onSubmit: SubmitHandler<ILoginData> = (data) => {
    dispatch(
      actionCreators.userActions.login({
        ...data,
      }),
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <VStack>
        <Box bg="#FFFFFF0D" w="100%" p="20px">
          <FormControl isInvalid={Boolean(errors.username)} mb="20px">
            <Input
              id="username"
              placeholder="Имя пользователя"
              {...register('username', { required: 'Поле обязательно для заполнения' })}
            />
            {errors.username && <FormErrorMessage>{errors.username.message}</FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={Boolean(errors.password)}>
            <Input
              placeholder="Пароль"
              type="password"
              {...register('password', { required: 'Поле обязательно для заполнения' })}
            />
            {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
          </FormControl>
        </Box>
        <Button isLoading={status === 'loading'} type="submit">
          Войти
        </Button>
      </VStack>
    </form>
  );
}
