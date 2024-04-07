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

const Modals = () => {
  const { failureModal, successModal, closeFailureModal, closeSuccessModal } = useContext(
    ModalContext
  ) as ModalContextType;

  return (
    <>
      <Modal isOpen={successModal} onClose={closeSuccessModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Criação de conta:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Você criou uma conta com sucesso!</ModalBody>

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
          <ModalBody>Você não conseguiu criar uma conta dentro de 15 segundos!</ModalBody>

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
