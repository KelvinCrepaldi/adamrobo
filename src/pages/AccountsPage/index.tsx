import { Box } from '@chakra-ui/react';
import AccountsList from '../../components/AccountsList';
import { useContext, useEffect } from 'react';
import { AccountContext, AccountContextType } from '../../context/AccountContext';
import { useNavigate } from 'react-router-dom';

const AccountsPage = () => {
  const { getAccountsList, accountsList } = useContext(AccountContext) as AccountContextType;
  const navigate = useNavigate();

  useEffect(() => {
    getAccountsList();
  });

  useEffect(() => {
    if (accountsList && accountsList?.length <= 0) {
      navigate("/");
    }
  }, [accountsList]);
  
  return (
    <Box>
      <AccountsList />
    </Box>
  );
};

export default AccountsPage;
