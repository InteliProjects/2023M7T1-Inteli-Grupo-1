import CrudAddress from '../services/addressServices';

class AddressCont{

    static async create (req: any, res: any) {

        const id = parseInt(req.params.id);
        const response = await CrudAddress.create(req.body, id);

        res.status(response.status).json(response);

    };
    
    static async read (req: any, res: any) {

        const id = parseInt(req.params.id);
        const response = await CrudAddress.findById(id);

        res.status(response.status).json(response);

    };
    
    static async readAll(req: any, res: any){

        const response = await CrudAddress.readAll();

        res.status(response.status).json(response);

    };

    static async update (req: any, res: any) {

        const response = await CrudAddress.update(req.body, req.body.id);

        res.status(response.status).json(response);
        
    };

    static async delete (req: any, res: any) {

        const id = parseInt(req.params.id);
        const response = await CrudAddress.delete(id);

        res.status(response.status).json(response);
        
    };
}

export default AddressCont