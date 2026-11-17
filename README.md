# API de Biblioteca — Suíte de Testes

## Sobre o projeto

Este projeto consiste em uma API REST para gerenciamento de um catálogo de livros, desenvolvida em Node.js e Express.

O objetivo é implementar uma suíte de testes automatizados, utilizando Jest e Supertest, para verificar o funcionamento das rotas, as regras de negócio e o tratamento de erros.

## Tecnologias utilizadas

- Node.js
- Express
- Jest
- Supertest
- JavaScript

## Estrutura do projeto

```text
biblioteca-testes/
├── src/
│   ├── app.js
│   └── server.js
├── __tests__/
│   └── app.test.js
├── coverage/
├── package.json
├── package-lock.json
└── README.md
```

## Instalação

1. Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

2. Entre na pasta do projeto:

```bash
cd trabalho_teste
```

3. Instale as dependências:

```bash
npm install
```

## Executando a API

Para iniciar o servidor:

```bash
node src/server.js
```

A API ficará disponível em:

```text
http://localhost:3000
```

## Executando os testes

Para executar a suíte de testes:

```bash
npm test
```

Para gerar o relatório de cobertura:

```bash
npm run test:coverage
```

## Casos de teste implementados

| Método | Rota | Resultado esperado |
|---|---|---|
| GET | /livros | HTTP 200 — Lista vazia |
| POST | /livros | HTTP 201 — Livro cadastrado |
| POST | /livros | HTTP 400 — Título ausente |
| DELETE | /livros/1 | HTTP 200 — Livro removido |
| DELETE | /livros/999 | HTTP 404 — Livro não encontrado |

## Cobertura de código

A suíte de testes apresentou os seguintes resultados:

| Indicador | Cobertura |
|---|---:|
| Statements | 100% |
| Branches | 100% |
| Functions | 100% |
| Lines | 100% |

A cobertura atingiu 100% em todos os indicadores avaliados pelo Jest, superando a exigência mínima de 80% estabelecida na atividade.

## Isolamento dos testes

Foi utilizado o hook `beforeEach()` do Jest em conjunto com a função `app.limparCatalogo()` para garantir que cada teste seja executado com o catálogo limpo, evitando interferências entre os cenários.

## Autores

Desenvolvido por: [Nome do integrante 1] e [Nome do integrante 2].

Trabalho acadêmico — Suíte de Testes para API de Biblioteca.