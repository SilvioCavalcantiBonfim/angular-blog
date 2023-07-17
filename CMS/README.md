# Frontend do CMS de Blog em Angular

![Typescript](https://img.shields.io/badge/-TypeScript-white?style=for-the-badge&logo=typescript&color=3178C6&logoColor=white)
![angular](https://img.shields.io/badge/-angular-white?style=for-the-badge&logo=angular&color=DD0031&logoColor=white)
![tailwindcss](https://img.shields.io/badge/-tailwind_css-white?style=for-the-badge&logo=tailwindcss&color=06B6D4&logoColor=white)
![lottie](https://img.shields.io/badge/-Lottie-white?style=for-the-badge&color=08ccbc&logoColor=white)

Este é o projeto de frontend em Angular para o CMS (Sistema de Gerenciamento de Conteúdo) de um blog. O objetivo deste projeto é fornecer uma interface de usuário amigável e responsiva para gerenciar o conteúdo do blog, como criar, editar e excluir artigos, gerenciar comentários, entre outras funcionalidades relacionadas ao CMS.

## Configuração do Ambiente

Certifique-se de ter o Node.js e o Angular CLI instalados em sua máquina.

1. Clone este repositório para sua máquina local.
2. Na raiz do projeto, execute `npm install` para instalar as dependências.
3. Execute `ng serve` para iniciar o servidor de desenvolvimento.
4. Acesse o aplicativo em seu navegador em `http://localhost:4200`.

## Estrutura do Projeto

- `src`: Contém o código-fonte principal do projeto.
  - `app`: Pasta para armazenar os componentes e serviços do aplicativo.
    - `adapter`: Pasta para armazenar os adaptadores do projeto.
    - `animations`: Pasta para armazenar as animações angular.
    - `apicommunication`: Pasta para armazenar o serviço de comunicação com o backend.
    - `dashboard`: Pasta para armazenar o modulo dashboard da rota `/dashboard`.
    - `editor`: Pasta para armazenar o modulo do editor.
    - `entity`: Pasta para armazenar os tipos.
    - `login`: Pasta para armazenar o modulo login da rota `/`.
    - `notification`: Pasta para armazenar o modulo e o serviço de notificações.
    - `Permission`: Pasta para armazenar o gaurd.
    - `app.component.ts`: Arquivo do componente principal do aplicativo.
    - `app.module.ts`: Arquivo de configuração do módulo principal do aplicativo.
  - `assets`: Pasta para armazenar os recursos estáticos, como imagens e arquivos CSS.

## Funcionalidades

- Criar, editar e apagar artigos do blog.
- Gerenciar as configurações esteticas do blog.
- Gerenciar os dados do autor do blog.
- Visualizar e apagar comentários nos artigos.

## Tecnologias Utilizadas

- Angular: Framework JavaScript para construção de interfaces de usuário.
- Angular Router: Gerenciador de rotas para navegação no aplicativo.
- HttpClientModule: Módulo para realizar requisições HTTP para a API do backend.
- BrowserAnimationsModule: Biblioteca para animações no Angular.
- LottieModule: Módulo para exibir animações do Lottie em projetos Angular.
- Tailwind CSS: Framework CSS utilitário para estilização rápida e responsiva.
- TypeScript: Superset do JavaScript utilizado no desenvolvimento Angular.

## Capturas de telas

![Design sem nome](https://raw.githubusercontent.com/SilvioCavalcantiBonfim/angular-blog/master/images/cms.gif)



## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou correções, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença [MIT](LICENSE).
