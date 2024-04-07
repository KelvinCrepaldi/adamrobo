import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack
} from '@chakra-ui/react';
import InputMask from 'react-input-mask';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormValues, createAccountSchema } from './createAccoutSchema';

const Form = ({setAccount}: {setAccount: any}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({ resolver: zodResolver(createAccountSchema) });

  const onSubmit: SubmitHandler<FormValues> = (e) => {
    setAccount(e)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={5}>
        <FormLabel>Criar uma nova conta:</FormLabel>

        <FormControl id="name" isInvalid={!!errors.name}>
          <Input type="text" placeholder="Nome" {...register('name')} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl id="telephone" isInvalid={!!errors.telephone}>
          <Input
            type="text"
            as={InputMask}
            mask="(99) 99999-9999"
            placeholder='telefone'
            {...register('telephone')}
          />
          <FormErrorMessage>{errors.telephone?.message}</FormErrorMessage>
        </FormControl>

        <FormControl id="email" isInvalid={!!errors.email}>
          <Input type="text" placeholder="Email" {...register('email')} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <Button type="submit" colorScheme="red" variant="solid" isLoading={isSubmitting}>
          Criar conta
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
