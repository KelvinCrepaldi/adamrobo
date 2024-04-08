import { useContext } from 'react';
import { AccountContext, AccountContextType } from '../../context/AccountContext';
import { IAccount } from '../../types/database';
import { Button } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

import { Table, Thead, Tbody, Tr, Th, TableCaption, TableContainer } from '@chakra-ui/react';

const AccountsList = () => {
  const { accountsList, deleteAccount } = useContext(AccountContext) as AccountContextType;

  const handleDelete = (id: string) => {
    deleteAccount(id);
  };
  return (
    <TableContainer>
      <Table variant="simple">
        <TableCaption>lista de contas criadas anteriormente</TableCaption>
        <Thead>
          <Tr>
            <Th>Nome</Th>
            <Th>Email</Th>
            <Th>Telefone</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {accountsList &&
            accountsList.map((account: IAccount) => (
              <Tr key={account.id}>
                <Th> {account.name}</Th>
                <Th>{account.email}</Th>
                <Th>{account.telephone}</Th>
                <Th>
                  <Button onClick={() => handleDelete(account.id!)}>
                    <DeleteIcon />
                  </Button>
                </Th>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default AccountsList;
