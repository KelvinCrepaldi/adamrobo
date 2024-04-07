import { Box, Flex } from '@chakra-ui/react';
import Form from '../../components/Form';
import { useState } from 'react';
import { FormValues } from '../../components/Form/createAccoutSchema';

const HomePage = () => {

  const [account, setAccount] = useState<null | FormValues>(null);

  return (
    <Box>
      <Flex justify="center" align="center">
        <Form setAccount={setAccount}></Form>

        {account && <div>possui uma conta</div>}
      </Flex>
    </Box>
  );
};
export default HomePage;
