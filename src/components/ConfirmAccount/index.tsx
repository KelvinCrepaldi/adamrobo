import { Button, Container } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { ModalContext, ModalContextType } from '../../context/ModalContext';
import { AccountContext, AccountContextType } from '../../context/AccountContext';

const ConfirmAccount = () => {
  const { openFailureModal, openSuccessModal } = useContext(ModalContext) as ModalContextType;
  const { createAccount } = useContext(AccountContext) as AccountContextType;
  const [seconds, setSeconds] = useState<number>(15);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalId);
          return 0;
        } else {
          return prevSeconds - 1;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      openFailureModal();
    }
  }, [seconds]);

  const handleConfirm = () => {
    createAccount();
    openSuccessModal();
  };

  return (
    <>
      <Container>
        Você tem {seconds} segundos para confirmar a criação da conta.
        <Button onClick={handleConfirm}>Confirmar</Button>
      </Container>
    </>
  );
};

export default ConfirmAccount;
