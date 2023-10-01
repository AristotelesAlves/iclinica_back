import { prismaClient } from "../prisma/index";

class UsersService{
    async execute(){
        const users = await prismaClient.usuario.findMany()
        return users
    }
}

export { UsersService }