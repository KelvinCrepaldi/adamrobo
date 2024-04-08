import { useContext } from 'react';
import { ModalContext, ModalContextType } from '../../context/ModalContext';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import { AccountContext, AccountContextType } from '../../context/AccountContext';
import { useTranslation } from 'react-i18next';

const Modals = () => {
  const { t } = useTranslation();
  const { seconds } = useContext(AccountContext) as AccountContextType;

  const { failureModal, successModal, closeFailureModal, closeSuccessModal } = useContext(
    ModalContext
  ) as ModalContextType;

  return (
    <>
      <Modal isOpen={successModal} onClose={closeSuccessModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('accountCreationSuccess')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{t('challengeCompleted', { seconds: seconds })}</ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={closeSuccessModal}>
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={failureModal} onClose={closeFailureModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{t('accountCreationFailure')}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{t('challengeNotCompleted')}</ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={closeFailureModal}>
              Ok
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Modals;
