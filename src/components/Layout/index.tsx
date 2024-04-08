import { Box, ChakraProvider, Container, Flex, Image, theme } from '@chakra-ui/react';
import Navbar from '../Navbar';
import Modals from '../Modals';

const Layout = ({ children }: { children: any }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex minH="100vh" direction={'column'}>
          <Box shadow="base" p={5}>
            <Flex justify={'space-between'} align={'center'}>
              <Image src="assets/logo.svg" w={'150px'}></Image>
              <Navbar />
            </Flex>
          </Box>
          <Container as="section" p={10}>
            {children}
          </Container>
        </Flex>
      </Box>
      <Modals />
    </ChakraProvider>
  );
};

export default Layout;
