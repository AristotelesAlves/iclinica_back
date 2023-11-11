import {Router} from "express"
import { PacientesController } from "./controller/PacientesController"
import { UserService } from "./services/UserService";
import { userController } from "./controller/UserController";

const router = Router()

router.get('/paciente', new PacientesController().list);
router.get('/paciente/:id', new PacientesController().showOne);
router.put('/paciente/edit', new PacientesController().edit);
router.post('/paciente/create', new PacientesController().create);
router.put('/paciente/active', new PacientesController().active);
router.put('/paciente/inactive', new PacientesController().inative);

router.get('/usuario', new userController().list);
router.get('/usuario/:id', new userController().showOne);
router.put('/usuario/isActive', new userController().isActive);
router.put('/usuario/newPassworld', new userController().newPassword);
router.put('/usuario/update', new userController().update);
router.post('/usuario/create', new userController().create);





export {router}