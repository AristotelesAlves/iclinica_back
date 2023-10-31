import { UserInterface } from "../entities/UserInterface";
import { prismaClient } from "../prisma";

export class LoginService {
    async execute(props: any) {
        try {
            const userAlreadyExists = await prismaClient.usuario.findUnique({
                where: {
                    nome: props.nome,
                }, include: {
                    controle: {
                        include: {
                            agendamento: true,
                            anamnese: true,
                            consulta: true,
                            paciente: true,
                        }
                    }
                }
            })

            if (userAlreadyExists) {
                const { senha } = props;
                const match =  senha == userAlreadyExists.senha

                if (!match) {
                    return ('Senha Incorreta')
                }

                const data = { ...userAlreadyExists }
                delete data.senha;

                return data
            } else {
                return("Usuário não encontrado")
            }
        } catch (error) {
            throw new Error(error)
        }
    }
}