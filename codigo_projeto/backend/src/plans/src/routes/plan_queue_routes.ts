/**
 * Importa o módulo 'Router' do Express para criar rotas.
 * Importa o controlador 'plan_controller' para lidar com as solicitações relacionadas a planos.
 */
import { Router, Request, Response } from "express";
import { plan_controller } from "../controllers/plan_controller";

/**
 * Cria uma instância de roteador Express chamada 'router'.
 */
const router = Router();

/**
 * Define uma rota GET na raiz ("/") que chama a função 'list' do controlador 'plan_controller'
 * quando uma solicitação GET é feita para essa rota.
 */
router.get('/', plan_controller.list);

/**
 * Exporta o roteador criado para ser utilizado na aplicação principal.
 */
export default router;