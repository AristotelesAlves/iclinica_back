import { prismaClient } from "../prisma";

class LoginService{
    async execute(){
        const user = await prismaClient.usuario.findUnique({
            where: {
                id
                nome,
            }
        })
    }
}