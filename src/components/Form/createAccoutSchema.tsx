import { z } from 'zod';

const phoneRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;

export const createAccountSchema = z.object({
  name: z.string().min(1, { message: 'First name is required' }),
  email: z.string().email(),
  telephone: z.string().regex(phoneRegex, 'Número de telefone invalido')
});

export type FormValues = z.infer<typeof createAccountSchema>;

