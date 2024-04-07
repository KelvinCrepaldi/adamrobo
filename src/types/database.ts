export interface IAccount {
  id?: string;
  name: string;
  email: string;
  telephone: string;
}

export type CreateAccountTypes = {
  name: string;
  email: string;
  telephone: string;
};
