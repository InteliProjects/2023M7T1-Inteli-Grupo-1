import { Router, Request, Response } from "express";

// Cria uma instância do roteador Express.
const router = Router();

// Define uma rota GET na raiz ("/") da aplicação.
router.get('/', (req: Request, res: Response) => {

    // Retorna uma resposta JSON com status 200 (OK) e um objeto com um título.
    return res.status(200).json({
        title: "API teste!" // Um título simples para a resposta.
    });
});

// Exporta o roteador para uso em outras partes do aplicativo.
export default router;


