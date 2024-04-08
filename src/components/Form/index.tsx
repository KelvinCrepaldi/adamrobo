import {
  Box,
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
import { createAccountSchema } from './createAccoutSchema';
import { FormValues } from '../../types/form';
import { AccountContext, AccountContextType } from '../../context/AccountContext';
import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

const Form = () => {
  const { t } = useTranslation();
  const { setAccount } = useContext(AccountContext) as AccountContextType;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<FormValues>({ resolver: zodResolver(createAccountSchema) });

  const onSubmit: SubmitHandler<FormValues> = (e) => {
    setAccount(e);
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} maxW={'400px'} w="100%">
      <Stack spacing={5}>
        <FormLabel>{t('formCreateAccount')}</FormLabel>

        <FormControl id="name" isInvalid={!!errors.name}>
          <FormLabel>{t('name')}:</FormLabel>
          <Input type="text" placeholder={t('name')} {...register('name')} />
          {errors.name?.message && <FormErrorMessage>{t(errors.name.message)}</FormErrorMessage>}
          
        </FormControl>

        <FormControl id="telephone" isInvalid={!!errors.telephone}>
          <FormLabel>{t('telephone')}:</FormLabel>
          <Input
            type="text"
            as={InputMask}
            mask="(99) 99999-9999"
            placeholder={t('telephone')}
            {...register('telephone')}
          />
          {errors.telephone?.message && <FormErrorMessage>{t(errors.telephone.message)}</FormErrorMessage>}
        </FormControl>

        <FormControl id="email" isInvalid={!!errors.email}>
          <FormLabel>{t('email')}:</FormLabel>
          <Input type="text" placeholder={t('email')} {...register('email')} />
          {errors.email?.message && <FormErrorMessage>{t(errors.email.message)}</FormErrorMessage>}
        </FormControl>

        <Button type="submit" colorScheme="red" variant="solid" isLoading={isSubmitting}>
        {t('buttonCreateAccount')}
        </Button>
      </Stack>
    </Box>
  );
};

export default Form;
