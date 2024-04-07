import { useContext } from 'react';
import { AccountContext, AccountContextType } from '../../context/AccountContext';
import { IAccount } from '../../types/database';
import { Box, Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';


const AccountsList = () => {
  const { accountsList, deleteAccount } = useContext(AccountContext) as AccountContextType;

  const handleDelete = (id: string) =>{
    deleteAccount(id)
  }
  return (
    <div>
      {accountsList &&
        accountsList.map((account: IAccount) => <Box key={account.id}>
            {account.name} | {account.email} | {account.telephone}
            <Button onClick={()=>handleDelete(account.id!)}><DeleteIcon/></Button>
            </Box>)}
    </div>
  );
};

export default AccountsList;
