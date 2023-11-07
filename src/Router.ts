import {Router} from "express"
import { CreateUserController } from "./controller/CreateUserController"
import { LoginController } from "./controller/LoginController"
import { PacientesController } from "./controller/PacientesController"

const router = Router()

router.get('/paciente', new PacientesController().list);
router.get('/paciente/:id', new PacientesController().showOne);
router.put('/paciente/edit', new PacientesController().edit);
router.post('/paciente/create', new PacientesController().create);
router.put('/paciente/active', new PacientesController().active);
router.put('/paciente/inactive', new PacientesController().inative);

router.post('/usuario', new CreateUserController().handle)



export {router}