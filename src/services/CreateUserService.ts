import { UserInterface } from "../entities/UserInterface";
import { prismaClient } from "../prisma";

class CreateUserService {
    async execute(props: UserInterface){
        
        const {
            id,
            create_agendamento,
            create_anamnese,
            delete_agendamento, 
            delete_anamnese, 
            delete_consulta,
            nome,
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
            update_paciente} = props
        
        const user = await prismaClient.usuario.create({
            data: {
              nome,
              senha,
              ocupacao,
              created_at: new Date(),
              deleted_at: new Date(),
              is_active: true,
              updated_at: new Date(),
              controle: {
                create: [
                    {
                        created_at: new Date(),
                        deleted_at: new Date(),
                        is_active: true,
                        updated_at: new Date(),

                        agendamento: {
                            create: {
                                create_agendamento,
                                delete_agendamento,
                                read_agendamento,
                                update_agendamento
                            }
                        },
                        anamnese: {
                            create: {
                                create_anamnese,
                                delete_anamnese,
                                read_anamnese,
                                update_anamnese,
                            }
                        },
                        consulta: {
                            create:{
                                create_consulta,
                                delete_consulta,
                                read_consulta,
                                update_consulta
                            }
                        },
                        paciente: {
                            create: {
                                create_paciente,
                                delete_paciente,
                                read_paciente,
                                update_paciente
                            }
                        }
                    }
                ]
              }
            }
        });

        return user
    }
}

export { CreateUserService }