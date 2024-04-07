import * as React from 'react';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Stack,
  useDisclosure
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { AccountContext, AccountContextType } from '../../context/AccountContext';

interface Props {
  children: React.ReactNode;
  pathName: string;
  disabled?: boolean;
}

const Links = [
  { name: 'Página inicial', path: '/' },
  { name: 'Contas', path: '/accounts' }
];

const NavLink = ({ pathName, children, disabled = false }: Props) => {
  return (
    <a href={pathName}  >
      <Button
        px={2}
        py={1}
        rounded={'md'}
        variant={"link"}
        
        colorScheme='red'
        isDisabled={disabled}
      >
        {children}
      </Button>
    </a>
    
  );
};

const Navbar = () => {
  const {disableAccountPage} = React.useContext(AccountContext) as AccountContextType
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box pb={4} ps="relative">
        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <NavLink key={"Criar conta"} pathName={"/"}>
              Criar conta
            </NavLink>
            <NavLink key={"Contas"} pathName={"/accounts"} disabled={disableAccountPage}> 
            Contas
            </NavLink>
          <ColorModeSwitcher />
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
          pb={4}
          pos="absolute"
          display={{ md: 'none' }}
          top={0}
          right={0}
          p={4}
          shadow={'md'}
        >
          <Flex justify={'space-between'} pb={4}>
            <ColorModeSwitcher />
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
            {Links.map((link) => (
              <NavLink key={link.name} pathName={link.path}>
                {link.name}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </>
  );
};

export default Navbar;
