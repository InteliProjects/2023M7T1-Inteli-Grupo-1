import { Router } from "express";
import { product_controller } from "../controllers/product_controller";
import { auth } from '../middlewares/middlewares';

const router = Router();

// Define as rotas para manipulação de produtos
router.get('/', product_controller.findAll);            // Rota para listar todos os produtos
router.post('/', auth, product_controller.store);       // Rota para criar um novo produto (requer autenticação)
router.get('/categories/:category', product_controller.filterByCategory);  // Rota para filtrar produtos por categoria
router.get('/filter/:query', product_controller.filter); // Rota para filtrar produtos por consulta
router.get('/:id', product_controller.findById);        // Rota para obter detalhes de um produto pelo ID

export default router;