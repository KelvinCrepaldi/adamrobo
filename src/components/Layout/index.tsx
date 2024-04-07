import { Box, ChakraProvider, Container, Flex, Image, theme } from '@chakra-ui/react';
import Navbar from '../Navbar';

const Layout = ({ children }: { children: any }) => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Flex minH="100vh" p={3} direction={'column'}>
          <Box>
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
    </ChakraProvider>
  );
};

export default Layout;
