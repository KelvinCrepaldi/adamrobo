import { useTranslation } from 'react-i18next';
import { Button, Menu, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react';
import { FaLanguage } from 'react-icons/fa';
const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Menu>
      <MenuButton as={Button}>
        <Icon boxSize={8} as={FaLanguage}></Icon>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => changeLanguage('pt')}>{t('portuguese')}</MenuItem>
        <MenuItem onClick={() => changeLanguage('en')}>{t('english')}</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageSelector;