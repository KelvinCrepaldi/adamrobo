import { z } from 'zod';

const phoneRegex = /^\(\d{2}\)\s\d{5}-\d{4}$/;

export const createAccountSchema = z.object({
  name: z.string().min(1, { message: 'errorName' }),
  email: z.string().email({ message: 'errorEmail' }),
  telephone: z.string().regex(phoneRegex, 'errorTelephone')
});
