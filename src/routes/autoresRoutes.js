import express from "express"
import AutorController from "../controllers/autoresController.js"

const router = express.Router();

router
    .get("/autores", AutorController.listarautores)
    .get("/autores/:id", AutorController.listarLivroPorId)
    .post("/autores", AutorController.cadastrarLivro)
    .put("/autores", AutorController.atualizarLivro)
    .delete("/autores/:id", AutorController.deletarLivro)

export default router;