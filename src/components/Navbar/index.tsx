import * as React from 'react';
import { Box, HStack, IconButton, Stack, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

interface Props {
  children: React.ReactNode;
  pathName: string;
}

const Links = [
  { name: 'Página inicial', path: '/' },
  { name: 'Usuários', path: '/users' }
];

const NavLink = ({ pathName, children }: Props) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700')
      }}
      href={pathName}
    >
      {children}
    </Box>
  );
};

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box pb={4}>
        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
          {Links.map((link) => (
            <NavLink key={link.name} pathName={link.path}>
              {link.name}
            </NavLink>
          ))}
          <ColorModeSwitcher />
        </HStack>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Box>
      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <ColorModeSwitcher />
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
