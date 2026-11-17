
const request = require('supertest');
const app = require('../src/app');

describe('Testes da API de Biblioteca', () => {

    // Executa antes de cada teste
    beforeEach(() => {
        app.limparCatalogo();
    });

    // Primeiro teste: listar livros
    test('GET /livros deve retornar uma lista vazia com status 200', async () => {

        const resposta = await request(app).get('/livros');

        expect(resposta.status).toBe(200);
        expect(resposta.body).toEqual([]);

    });

    // Segundo teste: cadastrar livro
    test('POST /livros deve cadastrar um livro e retornar status 201', async () => {

        const novoLivro = {
            titulo: 'Dom Casmurro',
            autor: 'Machado de Assis'
        };

        const resposta = await request(app)
            .post('/livros')
            .send(novoLivro);

        expect(resposta.status).toBe(201);

        expect(resposta.body).toHaveProperty('id', 1);
        expect(resposta.body).toHaveProperty('titulo', 'Dom Casmurro');
        expect(resposta.body).toHaveProperty('autor', 'Machado de Assis');

    });


    test('POST /livros deve retornar erro 400 quando o título não for informado', async () => {

        const novoLivro = {
            autor: 'Machado de Assis'
        };

        const resposta = await request(app)
            .post('/livros')
            .send(novoLivro);

        expect(resposta.status).toBe(400);

        expect(resposta.body).toHaveProperty(
            'erro',
            'Título e autor são campos obrigatórios.'
        );

    });

    test('DELETE /livros/:id deve remover um livro com sucesso', async () => {

    // Primeiro cadastramos um livro
    await request(app)
        .post('/livros')
        .send({
            titulo: 'Dom Casmurro',
            autor: 'Machado de Assis'
        });

    // Agora removemos o livro de ID 1
    const resposta = await request(app).delete('/livros/1');

    expect(resposta.status).toBe(200);

    expect(resposta.body).toHaveProperty(
        'mensagem',
        'Livro removido com sucesso.'
    );

    // Confirmamos que o catálogo ficou vazio
    const consulta = await request(app).get('/livros');

    expect(consulta.body).toEqual([]);

});

test('DELETE /livros/:id deve retornar erro 404 quando o livro não existir', async () => {

    const resposta = await request(app).delete('/livros/999');

    expect(resposta.status).toBe(404);

    expect(resposta.body).toHaveProperty(
        'erro',
        'Livro não encontrado.'
    );

});


});
