import CrudUser from '../services/user';
import CrudContacts from '../services/contacts';
import CrudAddress from '../services/address';

class UserCont{
    
    static async create (req: any, res: any) {
        const createdUser = await CrudUser.create(req.body);
        res.status(201).json(createdUser);
    };
    
    static async read (req: any, res: any) {
        // definindo o valor da variavel id como o número passado na rota
        const id = parseInt(req.params.id);
        const userData = await CrudUser.read(id);
        console.log(userData);
        res.send(userData);
    };
    
    static async readAll(req: any, res: any){
        const userData = await CrudUser.readAll();
        console.log(userData);
        res.send(userData);
    };

    static async readWithContacts(req: any, res: any){
        // definindo o valor da variavel id como o número passado na rota
        const id = parseInt(req.params.id);
        const readWithContactsData = await CrudUser.readWithContacts(id);
        console.log(readWithContactsData);
        res.send(readWithContactsData);
    };

    
    static async readWithAddress (req: any, res: any){
        // definindo o valor da variavel id como o número passado na rota
        const id = parseInt(req.params.id);
        const readWithAddressData = await CrudUser.readWithAddress(id);
        console.log(readWithAddressData);
        res.send(readWithAddressData);
    };

    
    static async update (req: any, res: any) {
        const id = parseInt(req.params.id);
        const updatedUser = await CrudUser.update(req.body, id);
        res.status(201).json(updatedUser);
    };

    static async delete (req: any, res: any) {
        // definindo o valor da variavel id como o número passado na rota
        const id = parseInt(req.params.id);
        // deletando os contatos e os endereços associados ao id selecionado
        const deletedData = await CrudContacts.delete(id)
        .then(await CrudAddress.delete(id))
        // deletando o usuário do id informado
        .then(await CrudUser.delete(id));
        console.log(deletedData);
        res.send("");
    };
}

export default UserCont