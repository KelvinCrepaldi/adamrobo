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

const Modals = () => {
  const { seconds } = useContext(AccountContext) as AccountContextType;

  const { failureModal, successModal, closeFailureModal, closeSuccessModal } = useContext(
    ModalContext
  ) as ModalContextType;

  return (
    <>
      <Modal isOpen={successModal} onClose={closeSuccessModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sucesso na criação de conta:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Desafio terminado em {seconds} segundos</ModalBody>
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
          <ModalHeader>Falha na criação de conta:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Desafio não finalizado</ModalBody>

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
