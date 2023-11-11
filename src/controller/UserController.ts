import { Request, Response } from "express";
import { UserService } from "../services/UserService";

class userController{

    // criação de usuário
    async create(req: Request, res: Response){
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
            update_paciente,
            create_usuario,
            delete_usuario,
            read_usuario,
            update_usuario
        } = req.body;
        const service = new UserService();
        const result = await service.create({
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
            update_paciente,
            create_usuario,
            delete_usuario,
            read_usuario,
            update_usuario
        });
        res.json(result);
    }

    // login
    async logi(req: Request, res: Response){
        const {nome, senha} = req.body;
        const service = new UserService();
        const result = await service.login(nome, senha);
        res.json(result);
    }

    // nova senha
    async newPassword(req: Request, res: Response){
        const {id,senha} = req.body;
        const service = new UserService();
        const result = await service.newPassword(id, senha)
        res.json(result);
    }

    // Atualização de dados do usuario
    async update(req: Request, res: Response){
        const { email, nome, ocupacao, id } = req.body;
        const service = new UserService();
        const result = await service.updateUser(email,nome,id, ocupacao)
        res.json(result);
    }

    // ativar ou desativar usuario
    async isActive(req: Request, res: Response){
        const { id, status } = req.body
        const service = new UserService();
        const result = await service.activUser(id, status);
        res.json(result);
    }

    // lita user
    async list(req: Request, res: Response){
        const service = new UserService();
        const result = await service.listUsers;
        res.json(result);
    }

    // busca de um usuario
    async showOne(req: Request, res: Response){
        const {id} = req.params;
        const service = new UserService();
        const result = await service.showOne(Number(id));
        res.json(result);
    }


}

export { userController }