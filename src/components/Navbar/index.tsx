import * as React from 'react';
import { Box, Button, Flex, HStack, IconButton, Stack, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { AccountContext, AccountContextType } from '../../context/AccountContext';
import ChangeLang from '../ChangeLang';
import { useTranslation } from 'react-i18next';

interface Props {
  children: React.ReactNode;
  pathName: string;
  disabled?: boolean;
}

const NavLink = ({ pathName, children, disabled = false }: Props) => {
  return (
    <a href={pathName}>
      <Button px={2} py={1} rounded={'md'} variant={'link'} colorScheme="red" isDisabled={disabled}>
        {children}
      </Button>
    </a>
  );
};

const Navbar = () => {
  const { disableAccountPage } = React.useContext(AccountContext) as AccountContextType;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation();

  return (
    <>
      <Box pb={4} ps="relative">
        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
          <NavLink key={'Criar conta'} pathName={'/'}>
            {t('createaccount')}
          </NavLink>
          <NavLink key={'Contas'} pathName={'/accounts'} disabled={disableAccountPage}>
            {t('accounts')}
          </NavLink>
          <ColorModeSwitcher />
          <ChangeLang/>
        </HStack>
        {!isOpen && (
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        )}
      </Box>
      {isOpen ? (
        <Box
          h={'100vh'}
          maxW={'250px'}
          w="full"
          pb={4}
          pos="absolute"
          display={{ md: 'none' }}
          top={0}
          right={0}
          p={4}
          shadow={'base'}
          zIndex={10}
          bg={useColorModeValue("white", "gray.800")}
        >
          <Flex justify={'space-between'} pb={4}>
            <ColorModeSwitcher />
            <ChangeLang/>
            {isOpen && (
              <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
              />
            )}
          </Flex>
          <Stack as={'nav'} spacing={4}>
          <NavLink key={'Criar conta'} pathName={'/'}>
          {t('createaccount')}
          </NavLink>
          <NavLink key={'Contas'} pathName={'/accounts'} disabled={disableAccountPage}>
          {t('accounts')}
          </NavLink>
          </Stack>
        </Box>
      ) : null}
    </>
  );
};

export default Navbar;
