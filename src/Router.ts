import {Request, Response, Router} from "express"
import { PacientesController } from "./controller/PacientesController"
import { userController } from "./controller/UserController";
import { agendamentoController } from "./controller/agendamentoController";
import { prismaClient } from "./prisma";

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
router.post('/usuario/login', new userController().login);


router.get('/agenda', new agendamentoController().list)
router.post('/agenda/create', new agendamentoController().create)
router.put('/agenda/update-status', new agendamentoController().status)
router.get('/agenda/lista-filro', new agendamentoController().listFiltered)

router.get('/test', async (req: Request, res: Response) => {
    const pc = await prismaClient.paciente.count()
    const result = pc ? 'true' : 'false'
    res.json(result)
})



export {router}