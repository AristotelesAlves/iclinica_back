import { Request, Response } from "express"
import { UserService } from "../services/UserService";

class UsersController {
    async activeUser(req: Request, res: Response){
        const {id} = req.body
        const service = new UserService();
        const result = await service.activUser(id);
        res.json(result);

    }
}

export { UsersController }