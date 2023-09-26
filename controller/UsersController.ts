import { Request, Response } from "express"
import { UsersService } from "../services/UsersService"

class UsersController {
    async handle(req: Request, res: Response){
        const {} = req.body
        const service = new UsersService();
        const result = await service.execute();
        res.json(result);

    }
}

export { UsersController }