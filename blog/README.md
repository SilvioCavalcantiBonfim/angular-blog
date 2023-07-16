# Frontend do Sistema de Blog em Angular

![Typescript](https://img.shields.io/badge/-TypeScript-white?style=for-the-badge&logo=typescript&color=3178C6&logoColor=white)
![angular](https://img.shields.io/badge/-angular-white?style=for-the-badge&logo=angular&color=DD0031&logoColor=white)
![tailwindcss](https://img.shields.io/badge/-tailwind_css-white?style=for-the-badge&logo=tailwindcss&color=06B6D4&logoColor=white)
![lottie](https://img.shields.io/badge/-Lottie-white?style=for-the-badge&color=08ccbc&logoColor=white)

Este é o projeto de frontend em Angular para um sistema de blog. O objetivo deste projeto é fornecer uma interface de usuário amigável e responsiva para visualizar e interagir com os posts do blog.

## Configuração do Ambiente

Certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.

1. Clone este repositório para sua máquina local.
2. Na raiz do projeto, execute `npm install` para instalar as dependências.
3. Execute `ng serve` para iniciar o servidor de desenvolvimento.
4. Acesse o aplicativo em seu navegador em `http://localhost:4200`.

## Estrutura do Projeto

- `src`: Contém o código-fonte principal do projeto.
  - `app`: Pasta para armazenar os componentes e serviços do aplicativo.
    - `animations`: Pata para armazenar as animações angular.
    - `article`: Pasta para armazenar o modulo article da rota `/article/:id`.
    - `carousel`: Pasta para armazenar o modulo carousel e seus componentes.
    - `entity`: Pasta para armazenar os tipos.
    - `factories`: Pasta para armazenar as factories.
    - `main`: Pasta para armazenar o modulo main da rota `/`.
    - `pieces`: Pasta para armazenar o modulo pieces que exporta os componentes `app-header` e `app-footer`.
    - `services`: Pasta para armazenar os serviços de comunicação com a API do backend, gerenciamento de artigos, configurações e buscas.
    - `terms-and-condition`: Pasta para armazenar os modelos de terms-and-condition da rota `/terms-and-condition`.
    - `app.component.ts`: Arquivo do componente principal do aplicativo.
    - `app.module.ts`: Arquivo de configuração do módulo principal do aplicativo.
  - `assets`: Pasta para armazenar os recursos estáticos, como imagens e arquivos CSS.

## Funcionalidades

- Visualizar lista de artigos do blog.
- Visualizar detalhes de um artigo específico.
- Comentar em um artigo.
- Pesquisar artigos por título ou conteúdo.
- Paginação para navegar pelos posts.

## Tecnologias Utilizadas

- Angular: Framework JavaScript para construção de interfaces de usuário.
- Angular Router: Gerenciador de rotas para navegação no aplicativo.
- HttpClientModule: Módulo para realizar requisições HTTP para a API do backend.
- BrowserAnimationsModule: Biblioteca para animações no Angular.
- LottieModule: Módulo para exibir animações do Lottie em projetos Angular.
- Tailwind CSS: Framework CSS utilitário para estilização rápida e responsiva.
- TypeScript: Superset do JavaScript utilizado no desenvolvimento Angular.

## Capturas de telas

![Design sem nome (1)](https://github.com/SilvioCavalcantiBonfim/angular-blog/assets/89864715/572a077d-8c2e-4d40-b61f-3cecb9397228)

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou correções, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).
