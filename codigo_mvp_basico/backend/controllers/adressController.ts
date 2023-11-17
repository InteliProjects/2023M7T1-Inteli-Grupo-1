import CrudAddress from '../services/address';

class AddressCont{

    static async create (req: any, res: any) {
        // definindo o valor da variavel id como o número passado na rota
        const id = parseInt(req.params.id);
        const createdUser = await CrudAddress.create(req.body, id);
        res.status(201).json(createdUser);
    };
    
    static async read (req: any, res: any) {
        // definindo o valor da variavel id como o número passado na rota
        const id = parseInt(req.params.id);
        const userData = await CrudAddress.read(id);
        console.log(userData);
        res.send(userData);
    };
    
    static async readAll(req: any, res: any){
        const userData = await CrudAddress.readAll();
        console.log(userData);
        res.send(userData);
    };

    static async update (req: any, res: any) {
        const updatedUser = await CrudAddress.update(req.body, req.body.id);
        res.status(201).json(updatedUser);
    };

    static async delete (req: any, res: any) {
        // definindo o valor da variavel id como o número passado na rota
        const id = parseInt(req.params.id);
        const deletedData = await CrudAddress.delete(id);
        console.log(deletedData);
        res.send(deletedData);
    };
}

export default AddressCont