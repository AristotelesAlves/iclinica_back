import { UserInterface } from "../entities/UserInterface";
import { prismaClient } from "../prisma";
class UserService {
    // lista de usuarios
    async list(){
        try {
            const usuario = await prismaClient.usuario.findMany()
            if(usuario){
                const data = usuario.map(user => {
                    const {senha, ...result} = user
                    return result
                })
                return data
            }
            return 'error'
        } catch (error) {
            console.error(error);
            return ('Erro ao buscar lista de usuarios')
        }
    }
    
    // ativando usuario
    async activUser(id: number, status: boolean){
        try {
            const user = await prismaClient.usuario.findUnique({
                where:{
                    id
                }
            })
            
            if(!user){
                return
            }
            
            const updateStatus = await prismaClient.usuario.update({
                where:{
                    id
                },
                data:{
                    is_active: status,
                    updated_at: new Date(),
                }
            })

            return `Usuário ${status == true ? 'ativado' : 'desativado'} com sucesso!`

        } catch (error) {
            console.error(error);
            return 'erro no processo de ativar/desativar usuário'
        }
    }
    // edição de usuarios
    async update(id: number, nome: string, email: string, ocupacao){
        try {
            const findUser = await prismaClient.usuario.findUnique({
                where:{
                    id
                }
            })
            if(findUser){
                const updateUser = await prismaClient.usuario.update({
                    where: {
                        id: id
                    },
                    data:{
                        nome,
                        email,
                        ocupacao
                    }
                })

                return updateUser
            }
            return 'usuário não encontrado'
            
        } catch (error) {
            return 'error'
        }
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
            update_paciente,
            create_usuario,
            delete_usuario,
            read_usuario,
            update_usuario} = props

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
            
            const senhacript = senha;
            
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
                  controle_agendamento: {
                    create:{
                        create_agendamento,
                        delete_agendamento,
                        read_agendamento,
                        update_agendamento
                    }
                  },
                  controle_anamnese: {
                    create:{
                        create_anamnese,
                        delete_anamnese,
                        read_anamnese,
                        update_anamnese
                    }
                  },
                  controle_consulta: {
                    create:{
                        create_consulta,
                        delete_consulta,
                        read_consulta,
                        update_consulta
                    }
                  },
                  controle_paciente: {
                    create:{
                        create_paciente,
                        delete_paciente,
                        read_paciente,
                        update_paciente
                    }
                  },
                  controle_usuario: {
                    create: {
                        create_usuario,
                        delete_usuario,
                        read_usuario,
                        update_usuario
                    }
                  }
                }
            });
            return user
        } catch (error) {
            return("Error ao procurar usuário " + error)
        }
    }

    // login
    async login(nome:string, senha:string) {
        try {
            const userAlreadyExists = await prismaClient.usuario.findUnique({
                where: {
                    nome,
                }, include: {
                    controle_agendamento: true,
                    controle_anamnese: true,
                    controle_consulta: true,
                    controle_paciente: true,
                    controle_usuario: true
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

    //
    async showOne(id:number){
        try {
            const user = await prismaClient.usuario.findUnique({
                where: {
                    id
                }
            })
            if(user){
                const data = { ...user }
                delete data.senha
                return data
            }else {
                return "Usuário não encontrado"
            }
        } catch (error) {
            console.error(error)
            return "Erro ao buscar usuário"
        }
    }

}
export { UserService }