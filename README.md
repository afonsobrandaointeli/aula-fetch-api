# Aula Prática: CRUD de Alunos com Sails.js e Fetch API

Este projeto Sails.js demonstra como criar uma aplicação web completa com um CRUD (Create, Read, Update, Delete) para gerenciar alunos, utilizando a Fetch API para comunicação entre o frontend e o backend.

## Objetivo da Aula

- Aprender os fundamentos do framework Sails.js para desenvolvimento web rápido e eficiente.
- Entender como criar APIs RESTful usando controladores e modelos no Sails.js.
- Utilizar a Fetch API para fazer requisições HTTP assíncronas para a API.
- Construir um frontend simples com HTML, CSS e JavaScript para interagir com a API.
- Implementar as operações CRUD (criar, ler, atualizar e deletar) para a entidade "Aluno".

## Pré-requisitos

- Node.js e npm (ou yarn) instalados.
- Conhecimento básico de JavaScript, HTML e CSS.
- Familiaridade com conceitos de APIs REST e JSON.

## Como Usar

1. **Clone o Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/aula-fetch-api.git
   cd aula-fetch-api
   ```

2. **Instale as Dependências:**

   ```bash
   npm install
   ```

3. **Crie o Banco de Dados:**

   Este projeto utiliza o banco de dados padrão do Sails (que pode ser configurado em `config/datastores.js`). Certifique-se de que o banco de dados esteja configurado e funcionando.

4. **Inicie a Aplicação:**

   ```bash
   sails lift
   ```

5. **Acesse a Aplicação:**

   Abra seu navegador e acesse `http://localhost:1337`. Você verá a lista de alunos (inicialmente vazia).

## Funcionalidades

- **Criar Aluno:** Preencha o formulário na página inicial e clique em "Criar Aluno".
- **Listar Alunos:** A lista de alunos é exibida na página inicial.
- **Editar Aluno:** Clique no botão "Editar" ao lado do aluno que deseja modificar. Um modal será aberto para editar os dados.
- **Deletar Aluno:** Clique no botão "Deletar" ao lado do aluno que deseja remover.

## Estrutura do Projeto

- **`api/controllers/AlunoController.js`:** Contém os métodos do controlador para lidar com as requisições da API (CRUD).
- **`api/models/Aluno.js`:** Define o modelo "Aluno" com seus atributos.
- **`assets/`:** Contém arquivos estáticos (CSS, JavaScript, imagens).
- **`config/`:** Configurações da aplicação (rotas, banco de dados, etc.).
- **`views/pages/homepage.ejs`:** Página principal que exibe a lista de alunos e o formulário de criação.

## Próximos Passos

- **Validação de Dados:** Adicione validação de dados no frontend e backend para garantir a integridade dos dados.
- **Autenticação e Autorização:** Implemente autenticação (login) e autorização para restringir o acesso a determinadas funcionalidades.
- **Testes:** Escreva testes unitários e de integração para garantir o funcionamento correto da aplicação.
- **Melhorias na Interface:** Utilize um framework CSS (como Bootstrap) para melhorar a aparência da interface.
- **Recursos Adicionais:** Explore outros recursos do Sails.js, como políticas, websockets e integração com outros serviços.
