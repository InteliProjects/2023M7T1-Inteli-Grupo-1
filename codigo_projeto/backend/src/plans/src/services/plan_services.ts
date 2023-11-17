import { errors } from '../constants/errors';
import { success } from '../constants/success';
import { IPlan } from '../interfaces/IPlan';
import { Plan } from '../models/Plan';

/**
 * Define um objeto chamado 'plan_services' que contém uma função assíncrona 'list'.
 * Esta função lida com a listagem de planos.
 */
export const plan_services = {

    /**
     * Função assíncrona 'list' que lista os planos.
     * @returns Um objeto contendo um status HTTP e uma mensagem de sucesso ou erro.
     */
    async list() {

        try {
            // Tenta encontrar todos os planos no banco de dados usando o modelo 'Plan'.
            const plans = await Plan.findAll();

            // Retorna um objeto com status 200 (OK) e uma mensagem de sucesso contendo os planos encontrados.
            return {
                status: 200,
                success: {
                    title: success.plans_found_successfully,
                    data: plans
                }
            };
        } catch (error) {
            // Se ocorrer um erro durante a busca, retorna um objeto com status 500 (Internal Server Error)
            // e uma mensagem de erro genérica.
            return {
                status: 500,
                error: {
                    title: errors.internal_server_error.title,
                    description: errors.internal_server_error.description
                }
            };
        }
    }
};