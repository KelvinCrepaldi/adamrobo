'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { AccountContext, AccountContextType } from '../AccountContext';

export type ModalContextType = {
  openSuccessModal: () => void;
  closeSuccessModal: () => void;
  openFailureModal: () => void;
  closeFailureModal: () => void;
  successModal: boolean;
  failureModal: boolean;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const { setAccount, getAccountsList } = useContext(AccountContext) as AccountContextType;
  const [successModal, setSucessModal] = useState<boolean>(false);
  const [failureModal, setFailureModal] = useState<boolean>(false);

  const openSuccessModal = () => {
    setSucessModal(true);
    setAccount(null);
  };

  const closeSuccessModal = () => {
    setSucessModal(false);
    getAccountsList();
  };

  const openFailureModal = () => {
    setFailureModal(true);
    setAccount(null);
  };

  const closeFailureModal = () => {
    setFailureModal(false);
  };

  return (
    <ModalContext.Provider
      value={{
        openSuccessModal,
        closeSuccessModal,
        openFailureModal,
        closeFailureModal,
        successModal,
        failureModal
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
