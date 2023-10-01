import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";


class CreateUserController{
    async handle(req: Request, res: Response){
        const {
            create_agendamento,
            create_anamnese,
            delete_agendamento, 
            delete_anamnese, 
            delete_consulta,
            nome,
            email,
            ocupacao,
            read_agendamento,
            read_anamnese,
            read_consulta,
            create_consulta,
            senha,
            update_agendamento,
            update_anamnese,
            update_consulta, 
            create_paciente,
            delete_paciente,
            read_paciente,
            update_paciente
        } = req.body;
        const service = new CreateUserService();
        const result = await service.execute({
            create_agendamento,
            create_anamnese,
            delete_agendamento, 
            delete_anamnese, 
            delete_consulta,
            nome,
            email,
            ocupacao,
            read_agendamento,
            read_anamnese,
            read_consulta,
            create_consulta,
            senha,
            update_agendamento,
            update_anamnese,
            update_consulta, 
            create_paciente,
            delete_paciente,
            read_paciente,
            update_paciente
        });
        res.json(result);
    }
}

export { CreateUserController }