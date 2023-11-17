// Importações necessárias para realizar os testes.
import { expect, jest, test } from '@jest/globals'
import { describe } from "node:test";

import { address_services } from "../src/api/src/services/address_services";

// Mock do serviço
jest.mock("../src/api/src/services/address_services");


describe("address_controller", () => {
    // Criação de endereço (store)
    // Cria novo endereço corretamente quando os dados são válidos.
    test("Cria novo endereço corretamente quando os dados são válidos", async () => {
        const req = {
            id: '1'
        }
        const user =  {
            id: '1',
            street: "Rua avarenga",
            number: '358',
            complement: "",
            district: "itu",
            city: "São Paulo",
            state: "São Paulo",
            country: "Brasil",
            zip_code: "00201-208",
            user_id: '1'
        };

        // Act
        const response = await address_services.findByUser(req.id as string);

        // Assert
        expect(response).toEqual(user);
    });
});
