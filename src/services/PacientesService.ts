import { PacienteInterface } from "../entities/PacienteInterface";
import { prismaClient } from "../prisma/index";

class PacientesService {
    async showOne(id: number) {
        try {
            const paciente = await prismaClient.paciente.findUnique(
                {
                    where: {
                        id: id
                    },
                    include:{
                        anamnese: true
                    }
                }
            );
            if(!paciente){
                return "Usuário não encontrado!"
            }
            return paciente
        } catch (error) {
            return "Falha ao buscar o paciente"
        }
    }

    async list(page: number = 1, nome: string = '') {
        try {
            let take = 10;
            let skip = (page - 1) * 10;
            const query = {take: take, skip: skip, orderBy: [{nome: 'asc'}], where: {}};

            if (nome) {
                query.where = {
                    nome: {
                        contains: nome,
                        mode: 'insensitive',
                    }
                };
            }

            const pacientes = await prismaClient.paciente.findMany(query as any)
            return pacientes
        } catch (error) {
            return (`Falha ao buscar lista de paciente`);
        }
    }

    async count(nome: string = '') {
        try {
            const query = {where: {}};

            if (nome) {
                query.where = {
                    nome: {
                        contains: nome,
                        mode: 'insensitive',
                    }
                };
            }
            const pacientes = await prismaClient.paciente.count(query)
            return pacientes
        } catch (error) {
            return (error);
        }
    }

    async create(props: PacienteInterface) {
        const {
            data_nascimento,
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
                    data_nascimento: data_nascimento,
                    telefone: telefone,
                    cpf: cpf,
                    created_at: new Date(),
                    deleted_at: new Date(),
                    is_active: true,
                    updated_at: new Date(),
                    anamnese:{
                        
                    }
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

            const { nome, email, cpf, data_nascimento, telefone, endereco, numero} = searchPaciente


            return await prismaClient.paciente.update({
                where: {
                    id: id,
                  },
                  data: {
                    nome: props.nome == "" ? nome : props.nome,
                    email: props.email == "" ? email : props.email,
                    cpf: props.cpf == "" ? cpf : props.cpf,
                    endereco: props.endereco == "" ? endereco : props.endereco,
                    data_nascimento: props.data_nascimento == "" ? data_nascimento : props.data_nascimento,
                    telefone: props.telefone == "" ? telefone : props.telefone,
                    numero: !props.numero ? numero : props.numero
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