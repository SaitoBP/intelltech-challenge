# Intelltech Challenge

Desafio passado pela empresa [Intelltech](https://intelltech.com.br/) para o processo seletivo

## Requirements

Desenvolver um sistema cliente/servidor web para cadastro de diretorios e formas geometricas

**Diretorios devem conter os atributos:**

- Id Diretorio (guid)
- Nome (string)

**Formas geometricas devem conter os atributos:**

- Id Diretorio (guid)
- Id Forma Geometrica (guid)
- Nome (string)
- Tipo (enum)

  - 1-Quadrado
  - 2-Triangulo

- Cor (string)
- Tamanho (int)

**Requisitos gerais:**

- Criar um formulario web para criação de diretorios
- Criar um formulario web para criação de formas geometricas
- Criar uma pagina de exibição listando todos os diretorios cadastrados
- Criar uma pagina de exibição listando todas as formas geometricas cadastradas
- Criar um pagina de exibição com os detalhes das formas geometricas cadastradas
- Codigo fonte deve ser mantido em um repositorio utilizando GIT
- Diretorios e formas geometricas devem ser armazenados em um banco de dados
- Servidor: C# .net
- Cliente: React

**Observações:**

- Não é necessario fazer telas e rotas de DELETE ou UPDATE, apenas GET e POST
- Não é necessario desenhar a forma geometicas, apenas exibir as informações cadastradas
- A escolha do banco de dados é livre, podendo ser um SQL ou um NoSQL

## Disclaimer

- O servidor foi solicitado em C#, porem não tenho pratica com C#, apenas C... Para não deixar de fazer o teste, resolvi desenvolver usando JavaScript.
- O banco de dados esta sendo feito em SQLite, porem como estou usando uma ORM é facil refatorar e adicionar outro banco SQL
- Todos os componentes do frontend foram feitos do zero, resolvi escrever os componentes do zero para demonstrar o conhecimento basico de alguns conceitos importantes como gerenciamento de estado,
  estilização e fetch
