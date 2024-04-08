import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          "portuguese": "Português",
          "english": "Inglês",
          "key": "Linguagem",
          "createaccount" : "Criar conta",
          "accounts": "Contas",
          "formCreateAccount": "Criar uma nova conta:",
          "name": "Nome",
          "email" : "Email",
          "telephone": "Telefone",
          "buttonCreateAccount" : "Criar conta",
          "errorName": "Nome é um campo obrigatório.",
          "errorEmail": "Formato de Email inválido.",
          "errorTelephone": "Número de telefone inválido",
          "accountCreationSuccess" : "Sucesso na criação de conta.",
          "challengeCompleted": "Desafio terminado em {{seconds}} segundos.",
          "accountCreationFailure": "Falha na criação de conta.",
          "challengeNotCompleted": "Desafio não finalizado.",
          "confirmAccountCreation": "Você tem {{seconds}} segundos para confirmar a criação da conta.",
          "confirm" : "Confirmar",
          "previousCreatedAccounts": "Lista de contas criadas anteriormente"
        }
      },
      en: {
        translation: {
          "portuguese": "Portuguese",
          "english": "English",
          "key": "Language",
          "createaccount" : "Create account",
          "accounts": "Accounts",
          "formCreateAccount": "Create a new account:",
          "name": "Name",
          "email" : "Email",
          "telephone": "Telephone",
          "buttonCreateAccount" : "Create account",
          "errorName": "Name is a required field.",
          "errorEmail": "Invalid Email Format.",
          "errorTelephone": "Invalid phone number.",
          "accountCreationSuccess" : "Account creation success.",
          "challengeCompleted": "Challenge completed in {{seconds}} seconds.",
          "accountCreationFailure": "Failed to create account.",
          "challengeNotCompleted": "Challenge not completed.",
          "confirmAccountCreation": "You have {{seconds}} seconds to confirm the account creation.",
          "confirm" : "Confirm",
          "previousCreatedAccounts": "List of previously created accounts"
        }
      }
    },
    lng: 'pt', 
    fallbackLng: 'pt', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;