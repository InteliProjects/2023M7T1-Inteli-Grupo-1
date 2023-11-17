import { Address, Contacts, User } from "../models/index";
import { IContact } from "../interfaces/ContactInterface";

class CrudContacts {
    
    static async create (body: IContact, id: number): Promise<any> {
        try {
            const bodyResponse = await Contacts.create({
                cellphone: body.cellphone,
                phone: body.phone,
                email: body.email,
                id_user: id
            })

            return bodyResponse;

        } catch (e) {
            return e;
        }
    }

    static async read (id: number): Promise<any> {
            try {
                const bodyResponse = await Contacts.findByPk(id)
                return bodyResponse;
            } catch (e) {
                return e;
            }
    }

    static async readAll (): Promise<any> {
        try {
            const bodyResponse = await Contacts.findAll()
            return bodyResponse
        } catch (e) {
            return e;
        }
    }

    static async update (body: IContact, id: number): Promise<any> {
        try {
            const bodyResponse = await Contacts.update({
                cellphone:body.cellphone,
                phone:body.phone,
                email: body.email,
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
            await Contacts.destroy({
                where: {
                  id_user: id
                }
              })
        } catch (e) {
            return e;
        }
    }
}

export default CrudContacts;