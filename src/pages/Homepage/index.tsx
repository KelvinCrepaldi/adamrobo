import { Box, Flex } from '@chakra-ui/react';
import Form from '../../components/Form';
import { useContext } from 'react';
import ConfirmAccount from '../../components/ConfirmAccount';
import { AccountContext, AccountContextType } from '../../context/AccountContext';

const HomePage = () => {
  const { account } = useContext(AccountContext) as AccountContextType;

  return (
    <Box>
      <Flex justify="center" align="center">
        {!account ? <Form /> : <ConfirmAccount />}
      </Flex>
    </Box>
  );
};
export default HomePage;
