# Como iniciar o projeto

rode os seguintes comandos

- `pnpm install` para instalar as dependencias do projeto.
- `pnpm start` para iniciar uma build de desenvolvimento.
- `pnpm run build` para criar uma build de produção.

# Desafio Frontend Adam Robo

Criar um site com um formulário de criação de conta (Nome,
Telefone e Email) e um botão para criar a conta. Após clicar
nesse botão, o site deve exibir um contador regressivo de 15
segundos e um botão de submit, tudo isso sem trocar de rota,
após clicar no botão submit o site exibirá um modal escrito
“Desafio terminado em X (valor atual do timer) segundos). Se o
timer zerar sem ser clicado em submit, o site deve exibir um
modal escrito “Desafio não finalizado”.

- O site deve ter outra rota, onde estarão as informações do
  usuário que foi criado (Nome, Telefone e Email);
- O site deve ter uma barra de navegação para trocar de
  rotas;
- O site deve permitir retornar para a última rota acessada;
- O timer não pode zerar ao trocar de rota e retornar a rota;
- O formulário não pode permitir informações em branco;
- O formulário deve possuir máscara de telefone;
- O site não deve permitir acessar a rota dos dados do
  usuário se não houver um usuário criado;
- A barra de navegação deve ter a seguinte [logo](https://drive.google.com/file/d/1EXobSHIrBs7aDhLlubEqHfVWVD3jZxbN/view);

## Dependências obrigatórias:

- React.js 18 e TypeScript;
- Layout responsivo;
- Componentes: Chakra UI, DaisyUI, HeadlessUI ou outros;
- React-hook-form;
- Código organizado e formatado: Prettier & ESLint;
- Código fonte no GitHub com README.md detalhado;
- Deploy: Vercel, Netlify ou semelhantes.

### Diferenciais:

- Utilizar PNPM;
- Utilizar IndexedDB;
- Utilizar i18n e criar um padrão em ingles;
- Utilizar o Zod;
- Utilizar framework ou biblioteca para gerenciar as rotas;
