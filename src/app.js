const express = require("express");
const app = express();


app.use(express.json());


let catalogoDeLivros = [
  { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien" },
];


// Rota: Listar todos os livros
app.get("/livros", (req, res) => {
  res.status(200).json(catalogoDeLivros);
});


// Rota: Adicionar um novo livro
app.post("/livros", (req, res) => {
  const { titulo, autor } = req.body;
  if (!titulo || !autor) {
    return res
      .status(400)
      .json({ erro: "Título e autor são campos obrigatórios." });
  }

  const novoLivro = {
    id: catalogoDeLivros.length + 1,
    titulo,
    autor,
  };


  catalogoDeLivros.push(novoLivro);
  res.status(201).json(novoLivro);
});


// Rota: Remover um livro por ID
app.delete("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = catalogoDeLivros.findIndex((l) => l.id === id);
  if (index === -1) {
    return res.status(404).json({ erro: "Livro não encontrado." });
  }
  catalogoDeLivros.splice(index, 1);
  res.status(200).json({ mensagem: "Livro removido com sucesso." });
});


// Função utilitária para os testes limparem o estado
app.limparCatalogo = () => {
  catalogoDeLivros = [];
};


module.exports = app;
