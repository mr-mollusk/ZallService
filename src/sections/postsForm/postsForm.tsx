import {
  Stack,
  FormControl,
  Button,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useMemo } from 'react';
import { IPost, usePostsActions } from '@/store/postsReducer';

const validationScheme = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    image: yup.string(),
  })
  .required();

const defaultValues: Omit<IPost, 'id'> = {
  title: '',
  description: '',
  image: '',
};

const PostsForm = () => {
  const { addPost } = usePostsActions();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationScheme),
  });

  const handleFormSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        addPost(data);
        reset();
      }),
    [addPost, handleSubmit, reset],
  );

  return (
    <Stack as="form" onSubmit={handleFormSubmit}>
      <FormControl isRequired isInvalid={!!errors.title?.message}>
        <FormLabel>Заголовок</FormLabel>
        <Input {...register('title')} />
        {errors.title?.message && <FormErrorMessage>{errors.title?.message}</FormErrorMessage>}
      </FormControl>
      <FormControl isRequired isInvalid={!!errors.description?.message}>
        <FormLabel>Описание</FormLabel>
        <Textarea {...register('description')} />
        {errors.description?.message && (
          <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Картинка (url)</FormLabel>
        <Input {...register('image')} />
      </FormControl>
      <Button type="submit">Добавить</Button>
    </Stack>
  );
};

export { PostsForm };
