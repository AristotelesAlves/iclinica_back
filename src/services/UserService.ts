import { UserInterface } from "../entities/UserInterface";
import { prismaClient } from "../prisma";
class UserService {
    // lista de usuarios
    async listUsers(){
        const user = await prismaClient.usuario.findMany()
        return user
    }
    // inativando usuario
    async inactivUser(id: number){
        const user = await prismaClient.usuario.update({
            where:{
                id: id
            },
            data:{
                is_active: false,
            }
        })
        return 'Usuário ativado!'
    }
    // ativando usuario
    async activUser(id: number){
        const user = await prismaClient.usuario.update({
            where:{
                id: id
            },
            data:{
                is_active: true,
            }
        })
        return 'Usuário desativado!'
    }
    // edição de usuarios
    async updateUser(id:number, props: UserInterface){
        const user = await prismaClient.usuario.findUnique({
            where:{
                id:id
            },
        })
        
        if(!user){
            return 'Usuário não encontrado'
        }
        
        const userUpdate = await prismaClient.usuario.update({
            where:{
                id: id,
            },
            data:{
                email:props.email == '' ? user.email : props.email,
                nome: props.nome == '' ? user.nome : props.nome,
                ocupacao: props.ocupacao == '' ? user.ocupacao : props.ocupacao,
                updated_at: new Date(),
            }
        })
        return {userUpdate}
    }
    
    // nova senha 
    async newPassword(id:number, senha: string){
        const user = await prismaClient.usuario.findUnique({
            where: {id: id}
        })

        if(!user){
            return 'Usuário não encontrado!'
        }

        const newPassword = await prismaClient.usuario.update({
            where: {id: id},
            data:{
                senha
            }
        })

        return 'Senha alterada com sucesso!'
    }
    // Criação de usuario
    async create(props: UserInterface){     
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
            update_paciente} = props
        try {
            const searchUser = await prismaClient.usuario.findFirst({
                where:{
                    OR: [
                        {nome},
                        {email}
                    ],
                }
            })
            
            if(searchUser){
                const result = searchUser.email === email ? "com esse email" : "" || searchUser.nome === nome ? "com essa nome" : ""
                return(`Usuário já cadastrado ${result}`)
            }
        } catch (error) {
            return("Error ao procurar usuário" + error)
        }

        const senhacript = senha;
    
        try {
            const user = await prismaClient.usuario.create({
                data: {
                  nome,
                  senha: senhacript,
                  email,
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
                },include: {
                    controle:{
                        include:{
                            agendamento: true,
                            anamnese: true,
                            consulta: true,
                            paciente: true,
                        }
                    }
                }
            });
            return user
        } catch (error) {
            console.error(error);
            return("Erro ao cadastrar usuário" + error) 
        }
        

        
    }

    async login(name:string, senha:string) {
        try {
            const userAlreadyExists = await prismaClient.usuario.findUnique({
                where: {
                    nome: name,
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
export { UserService }