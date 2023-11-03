import { PacienteInterface } from "../entities/PacienteInterface";
import { prismaClient } from "../prisma/index";

class PacientesService {
    async showOne(id: number) {
        const paciente = await prismaClient.paciente.findFirst({where: {id: id}});
        return paciente
    }

    async list() {
        const pacientes = await prismaClient.paciente.findMany()
        return pacientes
    }

    async create(props: PacienteInterface) {
        const {
            nascimento_data,
            nome,
            cpf,
            telefone,
            email
        } = props;

        // Checa se o paciente já existe
        try {
            const searchPaciente = await prismaClient.paciente.findFirst({
                where:{
                    OR: [
                        {cpf},
                        {email}
                    ],
                }
            })
            
            if(searchPaciente){
                const result = searchPaciente.email === email ? "com esse email" : "" || searchPaciente.cpf === cpf ? "com esse CPF" : ""
                return(`Paciente já cadastrado ${result}`)
            }
        } catch (error) {
            return("Error ao procurar paciente")
        }

        // Cadastra o paciente
        try {
            const paciente = await prismaClient.paciente.create({
                data: {
                    nome: nome,
                    email: email,
                    data_nascimento: nascimento_data,
                    telefone: telefone,
                    cpf: cpf,
                    created_at: new Date(),
                    deleted_at: new Date(),
                    is_active: true,
                    updated_at: new Date()
                }
            });
            return paciente;
        } catch (error) {
            console.error(error);
            return("Erro ao cadastrar paciente") 
        }
    }

    async update(id: number, props: PacienteInterface) {
        try {
            const searchPaciente = await prismaClient.paciente.findFirst({
                where:{
                    id: id
                }
            })
            
            if(!searchPaciente){
                return(`Paciente não encontrado.`);
            }
        } catch (error) {
            return(`Paciente não encontrado.`);
        }

        try {
            return await prismaClient.paciente.update({
                where: {
                    id: id,
                  },
                  data: {
                    nome: props.nome,
                    email: props.email,
                    cpf: props.cpf,
                    data_nascimento: props.nascimento_data,
                    telefone: props.telefone,
                  },
            });
        } catch (error) {
            return (`Falha ao atualizar dados do paciente`);
        }
    }

    async inactive(id: number) {
        try {
            const searchPaciente = await prismaClient.paciente.findFirst({
                where:{
                    id: id
                }
            })
            
            if(!searchPaciente || !searchPaciente.is_active) {
                return(`Paciente não encontrado ou não está ativo.`);
            }
        } catch (error) {
            return(`Paciente não encontrado.`);
        }

        try {
            return await prismaClient.paciente.update({
                where: {
                    id: id,
                  },
                  data: {
                    is_active: false,
                  },
            });
        } catch (error) {
            return (`Falha ao atualizar dados do paciente`);
        }
    }

    async active(id: number) {
        try {
            const searchPaciente = await prismaClient.paciente.findFirst({
                where:{
                    id: id
                }
            })
            
            if(!searchPaciente || searchPaciente.is_active) {
                return(`Paciente não encontrado ou já está ativo.`);
            }
        } catch (error) {
            return(`Paciente não encontrado.`);
        }

        try {
            return await prismaClient.paciente.update({
                where: {
                    id: id,
                  },
                  data: {
                    is_active: true,
                  },
            });
        } catch (error) {
            return (`Falha ao atualizar dados do paciente`);
        }
    }
}

export { PacientesService }