import {
  FormControl,
  RadioGroup,
  Flex,
  Radio,
  Spacer,
  VStack,
  Input,
  Checkbox,
  Button,
  Box,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IUserDTO } from '@/models';
import { actionCreators } from '@/store';
import { useAppDispatch } from '@/store/hooks';

export function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserDTO>({
    defaultValues: {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      password: '',
    },
  });
  const dispatch = useAppDispatch();
  const [isStaff, setIsStaff] = useState(false);
  const [userAgreement, setUserAgreement] = useState(false);
  const [offerAgreement, setOfferAgreement] = useState(false);

  const onSubmit: SubmitHandler<IUserDTO> = (data) => {
    dispatch(
      actionCreators.userActions.createUser({
        ...data,
        is_staff: isStaff,
        user_agreement: userAgreement,
        offer_agreement: offerAgreement,
      }),
    );
  };

  const changeRadioHandler = () => {
    setIsStaff((previos) => !previos);
  };

  const confirmUserAgreementHandler = () => {
    setUserAgreement((previos) => !previos);
  };

  const confirmOfferAgreementHandler = () => {
    setOfferAgreement((previos) => !previos);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <FormControl mt="20px" mb="20px">
        <RadioGroup onChange={changeRadioHandler} value={String(+isStaff)}>
          <Flex>
            <Radio value="0">Арендатор</Radio>
            <Spacer />
            <Radio value="1">Арендодатель</Radio>
            <Spacer />
          </Flex>
        </RadioGroup>
      </FormControl>
      <VStack>
        <FormControl isInvalid={Boolean(errors.username)}>
          <Input
            id="username"
            placeholder="Имя пользователя"
            {...register('username', { required: 'Поле обязательно для заполнения' })}
          />
          {errors.username && <FormErrorMessage>{errors.username.message}</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={Boolean(errors.first_name)}>
          <Input
            id="first_name"
            placeholder="Имя"
            {...register('first_name', { required: 'Поле обязательно для заполнения' })}
          />
          {errors.first_name && <FormErrorMessage>{errors.first_name.message}</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={Boolean(errors.last_name)}>
          <Input
            placeholder="Фамилия"
            {...register('last_name', { required: 'Поле обязательно для заполнения' })}
          />
          {errors.last_name && <FormErrorMessage>{errors.last_name.message}</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={Boolean(errors.email)}>
          <Input
            type="email"
            placeholder="Электронная почта"
            {...register('email', { required: 'Поле обязательно для заполнения' })}
          />
          {errors.email && <FormErrorMessage>{errors.email.message}</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={Boolean(errors.email)}>
          <Input
            autoComplete="disabled"
            type="tel"
            placeholder="Телефон"
            {...register('phone_number')}
          />
          {errors.phone_number && (
            <FormErrorMessage>{errors.phone_number.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={Boolean(errors.password)}>
          <Input
            placeholder="Пароль"
            type="password"
            {...register('password', { required: 'Поле обязательно для заполнения' })}
          />
          {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
        </FormControl>
        <FormControl isInvalid={Boolean(errors.password)}>
          <Input
            type="password"
            placeholder="Повторите пароль"
            {...register('password', { required: 'Поле обязательно для заполнения' })}
          />
          {errors.password && <FormErrorMessage>{errors.password.message}</FormErrorMessage>}
        </FormControl>

        <VStack>
          <Box>
            <Checkbox onChange={confirmUserAgreementHandler} checked={userAgreement}>
              Я подтверждаю ознакомление и согласие с Пользовательским соглашением, Политикой
              обработки персональных данных
            </Checkbox>
          </Box>
          <Checkbox onChange={confirmOfferAgreementHandler} checked={offerAgreement}>
            Я подтверждаю ознакомление и согласие с Публичной офертой
          </Checkbox>
        </VStack>
        <Button type="submit">Зарегистрироваться</Button>
      </VStack>
    </form>
  );
}
