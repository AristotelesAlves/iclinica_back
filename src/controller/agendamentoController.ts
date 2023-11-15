import { Request, Response } from "express";
import { agendamentoService } from "../services/agendamentoService";

export class agendamentoController{
    async create(req: Request, res: Response){
        const {
            data_de_agendado,
            observacao,
            status,
            medico_id,
            paciente_id
        } = req.body
        const service = new agendamentoService();
        const result = await service.create({
            data_de_agendado,
            observacao,
            status,
            medico_id,
            paciente_id
        })

        res.json(result);
    }

    async list(req: Request, res: Response){
        const service = new agendamentoService();
        const result = await service.list()
        res.json(result);
    }

    async status(req: Request, res: Response){
        const { id, status } = req.body
        const service = new agendamentoService()
        const result = await service.status(id,status)
        res.json(result);
    }

    async listFiltered(req: Request, res: Response){
        const { status, medicoNome, paciente_id, data_de_agendado } = req.body
        const service = new agendamentoService()
        const result = await service.listFiltered(
            medicoNome,
            status,
            paciente_id,
            data_de_agendado
            )
        res.json(result)
    }
}