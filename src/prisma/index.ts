// Importe as bibliotecas necessárias, incluindo o Prisma
import { PrismaClient } from '@prisma/client';

// Função para determinar a URL do banco de dados com base na variável de ambiente
function getDatabaseUrl(): string {
  const useDatabase1 = process.env.USE_DATABASE_1 === 'true';

  return useDatabase1 ? process.env.DATABASE_URL_1 || '' : process.env.DATABASE_URL_2 || '';
}

const prismaClient = new PrismaClient({
    datasources: {
      db: {
        url: getDatabaseUrl(),
      },
    },
  });


export { prismaClient }