import { z } from 'zod';

const phoneRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;

export const createAccountSchema = z.object({
  name: z.string().min(1, { message: 'Nome é um campo obrigatorio.' }),
  email: z.string().email({ message: 'Formato de Email invalido.' }),
  telephone: z.string().regex(phoneRegex, 'Número de telefone inválido')
});
