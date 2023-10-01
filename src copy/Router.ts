import {Router} from "express"
import { CreateUserController } from "./controller/CreateUserController"
import { LoginController } from "./controller/LoginController"

const router = Router()

router.get('/pacientes')
router.post('/usuario', new CreateUserController().handle)
router.post('/login', new LoginController().handle)

export {router}