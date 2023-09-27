import {Router} from "express"
import { CreateUserController } from "./controller/CreateUserController"

const router = Router()

router.get('/pacientes')
router.post('/usuario', new CreateUserController().handle)

export {router}