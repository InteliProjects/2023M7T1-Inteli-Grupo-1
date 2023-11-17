import { IAddress } from "../interfaces/AddressInterface";
import { User, Address } from "../models";

class CrudAddress {
    static async create (data: IAddress, id: number): Promise<any> {

        try {
            const address = await Address.create({
                cep:data.cep,
                state:data.state,
                city: data.city,
                district: data.district,
                street: data.street,
                number: data.number,
                id_user: id
            })

            return {
                status: 201,
                success: {
                    title: "Endereço criado com sucesso.",
                    data: address
                }
            };

        } catch (e) {

            return {
                status: 400,
                error: {
                    title: "Dados inválidos.",
                    failure: e
                }
            };

        }
    }

    static async findById(id: number): Promise<any> {
        try {

            const address = await Address.findByPk(id)
            return {
                status: 200,
                success: {
                    title: "Endereço encontrado com sucesso",
                    data: address
                }
            };

        } catch (e) {

            return {
                status: 400,
                error: {
                    title: "Dados inválidos.",
                    failure: e
                }
            };

        }
    }

    static async readAll (): Promise<any> {
        try {

            const addresses = await Address.findAll()
            return {
                status: 200,
                success: {
                    title: "Endereços encontrados com sucesso.",
                    data: addresses
                }
            }

        } catch (e) {

            return {
                status: 400,
                error: {
                    title: "Dados inválidos.",
                    failure: e
                }
            }

        }
    }

    static async update (data: IAddress, id: number): Promise<any> {
        try {

            const address = await Address.update({
                cep:data.cep,
                state:data.state,
                city: data.city,
                district: data.district,
                street: data.street,
                number: data.number
            }, {
                where: {id: id}
            });

            return {
                status: 204
            }

        } catch (e) {

            return {
                status: 400,
                error: {
                    title: "Dados inválidos.",
                    failure: e
                }
            };

        }
    }

    static async delete (id: number): Promise<any> {

        await Address.destroy({
            where: {
                id_user: id
            }
        });

        return {
            status: 204
        };

    }
}

export default CrudAddress;