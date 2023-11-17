import express from "express";
import AddressCont from "../controllers/addressController";

var addressRoutes = express.Router()

// criando as rotas para a execução dos metodos
addressRoutes.post('/:id', AddressCont.create)
addressRoutes.get('/', AddressCont.readAll)
addressRoutes.get('/:id', AddressCont.read)
addressRoutes.patch('/:id', AddressCont.update)
addressRoutes.delete('/:id', AddressCont.delete)


export default addressRoutes