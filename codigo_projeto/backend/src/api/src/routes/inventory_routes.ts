import { Router } from "express";
import { inventory_controller } from "../controllers/inventory_controller";
import { auth } from "../middlewares/middlewares";

// Cria uma instância do roteador Express.
const router = Router();

// Define uma rota POST para armazenar informações no inventário.
// Não requer autenticação, pois não utiliza o middleware 'auth'.
// O controlador 'inventory_controller.store' é responsável por lidar com esta rota.
router.post('/', inventory_controller.store);

// Exporta o roteador para uso em outras partes do aplicativo.
export default router;