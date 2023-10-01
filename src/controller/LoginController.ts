import { Request, Response } from "express";
import { LoginService } from "../services/LoginServices";

export class LoginController {
    async handle(request: Request, response: Response) {
        const raw = request.body

        const service = new LoginService()

        const result = await service.execute(raw)

        response.json(result)
    }
}