import  express  from "express";
import ContactCont from "../controllers/contactController";

var showContact = express.Router()

// criando as rotas para a execução dos metodos
showContact.post('/:id', ContactCont.create)
showContact.get('/', ContactCont.readAll)
showContact.get('/:id', ContactCont.read)
showContact.patch('/:id', ContactCont.update)
showContact.delete('/:id', ContactCont.delete)


export default showContact