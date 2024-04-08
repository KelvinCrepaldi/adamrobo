import { Button, Container, Flex, Progress, Text } from '@chakra-ui/react';
import { useContext, useEffect } from 'react';
import { ModalContext, ModalContextType } from '../../context/ModalContext';
import { AccountContext, AccountContextType } from '../../context/AccountContext';
import { useTranslation } from 'react-i18next';
const ConfirmAccount = () => {
  const { t } = useTranslation();
  const { failureModal, successModal, openFailureModal, openSuccessModal } = useContext(
    ModalContext
  ) as ModalContextType;
  const { createAccount, seconds, setSeconds } = useContext(AccountContext) as AccountContextType;

  useEffect(() => {
    if (!failureModal === !successModal) {
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
    }
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
    <Container>
      <Flex align="center" justify="center" direction="column" gap={6}>
        <Text>
          {t('confirmAccountCreation', {seconds: seconds})}
        </Text>
        <Progress colorScheme="red" value={(100 / 15) * seconds} w="100%" size="lg" />

        <Button variant="outline" colorScheme="red" onClick={handleConfirm}>
          {t('confirm')}
        </Button>
      </Flex>
    </Container>
  );
};

export default ConfirmAccount;
