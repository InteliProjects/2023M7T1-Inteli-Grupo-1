import  express  from "express";
import UserCont from "../controllers/userController";

var showUser = express.Router()

// criando as rotas para a execução dos metodos
showUser.post('/', UserCont.create)
showUser.get('/', UserCont.readAll)
showUser.get('/contacts/:id', UserCont.readWithContacts)
showUser.get('/addresses/:id', UserCont.readWithAddress)
showUser.get('/:id', UserCont.read)
showUser.patch('/:id', UserCont.update)
showUser.delete('/:id', UserCont.delete)


export default showUser