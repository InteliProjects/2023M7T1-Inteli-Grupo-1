import {User, Contacts, Address} from '../models/index';
import { IUser } from '../interfaces/UserInterface';

class CrudUser {

    static async create (body: IUser): Promise<any> {
        try {
            const bodyResponse = await User.create({name:body.name, 
                last_name: body.last_name})
            return bodyResponse;
        } catch (e) {
            return e;
        }
    }

    static async read (id: number): Promise<any> {
        try {
            const bodyResponse = await User.findByPk(id)
            return bodyResponse
        } catch (e) {
            return e;
        }
    }

    static async readAll (): Promise<any> {
        try {
            const bodyResponse = await User.findAll()
            return bodyResponse
        } catch (e) {
            return e;
        }
    }

    
    static async readWithContacts(id: number): Promise<any> {
        try {
            const bodyResponse = await Contacts.findAll({
                where: {
                  id_user: id,
                },
              })
              console.log("Body: " + bodyResponse)
            return bodyResponse;
          
        } catch (e) {
            return e;
        }
    }

    static async readWithAddress (id: number): Promise<any> {
        try {
            const bodyResponse = await Address.findAll({
                where: {
                  id_user: id,
                },
              })

              return bodyResponse

        } catch (e) {
            return e;
        }
    }

    static async update (body: IUser, id: number): Promise<any> {
        try {
            const bodyResponse = await User.update({
                name:body.name,
                last_name:body.last_name
            }, {
                where: {id: id}
            })


        } catch (e) {
            return e;
        }
    }

    static async delete (id: number): Promise<any> {
        try {
            await User.destroy({
                where: {
                  id: id
                }
              })
        } catch (e) {
            return e;
        }
    }

}

export default CrudUser;