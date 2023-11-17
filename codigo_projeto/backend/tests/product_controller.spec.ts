// Importações necessárias para realizar os testes.
import { Request, Response, NextFunction } from 'express';
import { afterEach, expect, jest, test } from '@jest/globals'
import { describe } from "node:test";

import { order_product_services } from "../src/api/src/services/order_product_services";
import { order_product_controller } from '../src/api/src/controllers/order_product_controller';

// Mock do serviço
jest.mock("../src/api/src/services/order_product_services");

describe("order_product_controller", () => {
    // Criação do pedido
    // Cria um pedido se todos os dados forem inseridos corretamente
    afterEach(() => {
        jest.resetAllMocks();
    });

    test("Cria novo pedido quando os dados são válidos", async () => {
        const requestData = {
            id: '1'
        };
        const order = {
            id: '1',
            user_id: '1',
            address_id: '1',
            payment_method_id: '1',
            status: '1',
            total_price: '1',
            created_at: '1',
            updated_at: '1'
        };

        const mockResponse = {
            status: 201,
            data: {
                id: '1',
                user_id: '1',
                address_id: '1',
                payment_method_id: '1',
                status: '1',
                total_price: '1',
                created_at: '1',
                updated_at: '1'
            },
        };

        (order_product_services.store as jest.Mock).mockResolvedValueOnce(mockResponse as unknown as never);

        const req: Request = {} as Request;
        const res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis(),
        } as unknown as Response;

        await order_product_controller.store(req, res, {} as NextFunction);

        expect(res.status).toHaveBeenCalledWith(mockResponse.status);

        expect(res.json).toHaveBeenCalledWith(mockResponse.data);
    });
});