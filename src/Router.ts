import {Router} from "express"
import { PacientesController } from "./controller/PacientesController"
import { userController } from "./controller/UserController";
import { agendamentoController } from "./controller/agendamentoController";

const router = Router()

router.get('/paciente', new PacientesController().list);
router.get('/paciente/count', new PacientesController().count);
router.get('/paciente/:id', new PacientesController().showOne);
router.put('/paciente/edit', new PacientesController().edit);
router.post('/paciente/create', new PacientesController().create);
router.put('/paciente/active/:id', new PacientesController().active);
router.put('/paciente/inactive/:id', new PacientesController().inative);


router.get('/usuario', new userController().list);
router.get('/usuario/:id', new userController().showOne);
router.put('/usuario/isActive', new userController().isActive);
router.put('/usuario/newPassworld', new userController().newPassword);
router.put('/usuario/update', new userController().update);
router.post('/usuario/create', new userController().create);
router.post('/usuario/login', new userController().login);


router.get('/agenda', new agendamentoController().list)
router.post('/agenda/create', new agendamentoController().create)
router.put('/agenda/update-status', new agendamentoController().status)
// router.get('/agenda/lista-filro', new agendamentoController().listFiltered)



export {router}