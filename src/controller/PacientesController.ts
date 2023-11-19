import { Request, Response } from "express"
import { PacientesService } from "../services/PacientesService";

class PacientesController {

    // Criar paciente
    async create(req: Request, res: Response) {
        var {
            data_nascimento,
            nome,
            cpf,
            telefone,
            email,
            endereco,
            numero,
        } = req.body;
        numero = Number(numero);
        const service = new PacientesService();
        const result = await service.create({
            data_nascimento, nome, cpf, telefone, email, endereco, numero
        });
        res.json(result);
    }

    // Editar paciente
    async edit(req: Request, res: Response) {
        var {
            data_nascimento,
            nome,
            cpf,
            telefone,
            email,
            endereco,
            numero
        } = req.body;
        const {id} = req.params;
        const service = new PacientesService();

        numero = Number(numero);

        const result = await service.update(Number(id), {
            data_nascimento, nome, cpf, telefone, email, endereco, numero
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