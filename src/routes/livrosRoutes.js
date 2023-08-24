import express from "express"
import LivroController from "../controllers/LivrosController.js"

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivroPorEditora)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.deletarLivro)

export default router;