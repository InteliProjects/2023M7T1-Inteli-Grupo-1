import { Router, Request, Response } from "express";
import { plan_controller } from "../controllers/plan_controller";

/**
 * Cria uma instância de roteador Express chamada 'router'.
 */
const router = Router();

/**
 * Define duas rotas GET: '/queue' e '/'.
 * - A rota '/queue' chama a função 'list_queue' do controlador 'plan_controller'
 *   quando uma solicitação GET é feita para essa rota.
 * - A rota '/' chama a função 'list' do controlador 'plan_controller'
 *   quando uma solicitação GET é feita para essa rota.
 */
router.get('/queue', plan_controller.list_queue);
router.get('/', plan_controller.list);

/**
 * Exporta o roteador criado para ser utilizado na aplicação principal.
 */
export default router;