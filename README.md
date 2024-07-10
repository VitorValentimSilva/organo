# Organo

Organo é um projeto desenvolvido como parte do programa de formação da Alura. Este projeto foi criado para aprimorar os conhecimentos em React e usa um design fornecido pelo Figma.

## Descrição do Projeto

Organo é um site que permite o cadastro de novos colaboradores em times específicos. A interface principal consiste em um formulário para adicionar colaboradores e uma seção para exibir os colaboradores cadastrados, separados pelos nomes dos times. Caso algum time não tenha nenhum colaborador, ele não será exibido.

### Funcionalidades Adicionais

Além das funcionalidades iniciais, o projeto foi aprimorado com uma página de login. Aqui estão as funcionalidades detalhadas:

- **Página Principal:**
  - **Formulário de Cadastro:** Adicione novos colaboradores preenchendo os campos nome, imagem, time (selecionar dentre os disponíveis) e cargo.
  - **Exibição de Colaboradores:** Colaboradores são exibidos separados por times.

- **Página de Login:**
  - **Autenticação:** Acesse o painel administrativo com email (vitorvalentin84@gmail.com) e senha (valentim123). Os dados de login são verificados por uma API criada para este propósito.
  - **Painel Administrativo:** 
    - **Tabela de Colaboradores e Times:** Visualize, edite ou exclua colaboradores e times cadastrados.
    - **Formulário para Novo Time:** Adicione novos times através de um formulário.

## Tecnologias Utilizadas

- **React**
- **Vite**
- **JavaScript**
- **API personalizada** para autenticação e armazenamento de dados

## Demonstração

Confira o projeto em funcionamento [aqui](https://organo-nu-liart.vercel.app).

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para a nova feature (`git checkout -b feature/nova-feature`)
3. Commit as mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça o push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
