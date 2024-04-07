import { z } from 'zod';
import { createAccountSchema } from '../components/Form/createAccoutSchema';

export type FormValues = z.infer<typeof createAccountSchema>;
