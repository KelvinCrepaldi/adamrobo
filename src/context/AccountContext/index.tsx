'use client';
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import { FormValues } from '../../types/form';
import { db } from '../../database';

export type AccountContextType = {
  account: FormValues | null;
  accountsList: { name: string; email: string; telephone: string }[] | null;
  setAccount: Dispatch<SetStateAction<{ name: string; email: string; telephone: string } | null>>; // eslint-disable-line no-unused-vars
  createAccount: () => Promise<void>; // eslint-disable-line no-unused-vars
  deleteAccount: (id: string) => Promise<void>; // eslint-disable-line no-unused-vars
  getAccountsList: () => Promise<void>;
  disableAccountPage: boolean;
  seconds: number;
  setSeconds: Dispatch<SetStateAction<number>>;
};

export const AccountContext = createContext<AccountContextType | null>(null);

export const AccountProvider = ({ children }: { children: ReactNode }) => {
  const [account, setAccount] = useState<null | FormValues>(null);
  const [accountsList, setAccountsList] = useState<null | FormValues[]>(null);
  const [disableAccountPage, setDisableAccountPage] = useState<boolean>(false);
  const [seconds, setSeconds] = useState<number>(15);

  const createAccount = async () => {
    if (account) await db.account.add(account);
  };

  const getAccountsList = async () => {
    const data: FormValues[] = await db.account.toArray();
    setAccountsList(data);
    if (data.length <= 0) {
      setDisableAccountPage(true);
    } else {
      setDisableAccountPage(false);
    }
  };

  const deleteAccount = async (id: string) => {
    if (accountsList) await db.account.delete(id);
    getAccountsList();
  };

  useEffect(() => {
    getAccountsList();
  }, []);

  return (
    <AccountContext.Provider
      value={{
        account,
        accountsList,
        setAccount,
        createAccount,
        deleteAccount,
        getAccountsList,
        disableAccountPage,
        seconds,
        setSeconds
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
