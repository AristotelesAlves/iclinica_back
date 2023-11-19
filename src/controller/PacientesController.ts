import { Request, Response } from "express"
import { PacientesService } from "../services/PacientesService";

class PacientesController {

    // Criar paciente
    async create(req: Request, res: Response) {
        const {
            nascimento_data,
            nome,
            cpf,
            telefone,
            email
        } = req.body;
        const service = new PacientesService();
        const result = await service.create({
            nascimento_data, nome, cpf, telefone, email
        });
        res.json(result);
    }

    // Editar paciente
    async edit(req: Request, res: Response) {
        const {
            nascimento_data,
            nome,
            cpf,
            telefone,
            email,
            id,
        } = req.body;
        const service = new PacientesService();
        const result = await service.update(id, {
            nascimento_data, nome, cpf, telefone, email
        });
        res.json(result);
    }

    // Inativar paciente
    async inative(req: Request, res: Response) {
        const {
            id,
        } = req.params;
        const service = new PacientesService();
        const result = await service.inactive(parseInt(id));
        res.json(result);
    }

    // Ativar paciente
    async active(req: Request, res: Response) {
        const {
            id,
        } = req.params;
        const service = new PacientesService();
        const result = await service.active(parseInt(id));
        res.json(result);
    }

    // Listar paciente
    async list(req: Request, res: Response) {
        const service = new PacientesService();
        let page = req.query.page;
        let nome = req.query.nome;
        const result = await service.list(parseInt((page as string) ?? '1'), nome as string);
        res.json(result);
    }

    // Contar pacientes
    async count(req: Request, res: Response) {
        const service = new PacientesService();
        let nome = req.query.nome;
        const result = await service.count(nome as string);
        res.json({total: result});
    }

    // Exibir um paciente
    async showOne(req: Request, res: Response) {
        const {
            id,
        } = req.params;
        const service = new PacientesService();
        const result = await service.showOne(Number(id));
        res.json(result);
    }
}

export { PacientesController }