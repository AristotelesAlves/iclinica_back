import { Iagendamento } from "../entities/agentamentoInterface";
import { prismaClient } from "../prisma";

export class agendamentoService{

    async create(props: Iagendamento){

        const existingAgenda = await prismaClient.agendamento.findFirst({
            where: {
                paciente_id: props.paciente_id,
                data_de_agendado: new Date(props.data_de_agendado)
            }
        });

        if (existingAgenda) {
            return 'Paciente já agendado nessa data e horário';
        }

        const agenda = await prismaClient.agendamento.create({
            data:{
                data_de_agendado: new Date(props.data_de_agendado),
                observacao: props.observacao,
                status:"agendado",
                updated_at: new Date(),
                created_at: new Date(),
                deleted_at: new Date(),
                medico:{
                    connect:{
                        id: props.medico_id
                    }
                },
                paciente:{
                    connect:{
                        id: props.paciente_id
                    }
                }
            }
        })


        return agenda
    }

    async list(){
        try {
            const agenda = await prismaClient.agendamento.findMany({})
            return agenda
        } catch (error) {
            console.log(error)
            return "Erro ao buscar agenda"
        }
    }

    async status(id: number, status: boolean){
        try {
            const statusAgenda = status == true ? 'atendido' : 'cancelada'
            const agenda = await prismaClient.agendamento.update({
                where:{
                    id
                },
                data:{
                    status: statusAgenda
                }
            })
            return `${statusAgenda}`
        } catch (error) {
            return "Erro ao mudar o status do agendamento"
        }
    }

    // async listFiltered(status: string, medico_id:number, paciente_id: number, data_de_agendado: string){
    //     try {
    //         const agenda = await prismaClient.agendamento.findMany({ 
    //             where: {
    //                 status,
    //                 medico: medico_id ? { id: medico_id } : undefined,
    //                 paciente: paciente_id ? { id: paciente_id } : undefined,
    //                 data_de_agendado: data_de_agendado || undefined,
    //             } 
    //         });
    //         if(agenda){
    //             return agenda;
    //         }
    //         return 'Não encontrei nada'
    //     } catch (error) {
    //         console.error(error);
    //         return "Erro ao buscar agenda";
    //     }
    // }


}