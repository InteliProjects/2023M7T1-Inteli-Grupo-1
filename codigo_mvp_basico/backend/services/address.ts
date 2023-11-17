import { IAddress } from "../interfaces/AddressInterface";
import { User, Address } from "../models";

class CrudAddress {
    static async create (data: IAddress, id: number) {

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

    static async read (id: number): Promise<any> {
        try {
            try {
                const dataResponse = await Address.findByPk(id)
                return dataResponse;
            } catch (e) {
                return e;
            }

        } catch (e) {
            return e;
        }
    }

    static async readAll (): Promise<any> {
        try {
            const dataResponse = await Address.findAll()
            return dataResponse
        } catch (e) {
            return e;
        }
    }

    static async update (data: IAddress, id: number): Promise<any> {
        try {
            const dataResponse = await Address.update({
                cep:data.cep,
                state:data.state,
                city: data.city,
                district: data.district,
                street: data.street,
                number: data.number,
                id_user: id
            }, {
                where: {id: id}
            })

        } catch (e) {
            return e;
        }
    }

    static async delete (id: number): Promise<any> {
        try {
            await Address.destroy({
                where: {
                    id_user: id
                }
              })
        } catch (e) {
            return e;
        }
    }
}

export default CrudAddress;