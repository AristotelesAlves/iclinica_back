import { prismaClient } from "../src/prisma";

async function main(){
    const joao = await prismaClient.paciente.create({
        data:{
            nome: "João Gomes",
            cpf: "111.222.333-44",
            data_nascimento: "1990-01-15",
            endereco: "Rua das Flores",
            numero: 123,
            bairro: "Centro",
            complemento: "Apto 2B",
            cep: 54321,
            telefone: "(11) 98765-1111",
            email: "usuario1@example.com",
            created_at: "2023-11-07T14:00:00Z",
            updated_at: "2023-11-07T15:45:00Z",
            deleted_at: null,
            is_active: true,
            anamnese:{
                create:{
                    created_at: "2023-11-07T15:45:00Z",
                    deleted_at: "2023-11-07T15:45:00Z",
                    is_active: true,
                    updated_at: "2023-11-07T15:45:00Z",
                    bebidas_alcoolicas: "não",
                    doenca_cronica: "não",
                    droga: "não",
                    dst: "não",
                    fumante: "não",
                    historico_de_cancer_na_familia: "não",
                    infeccao_urinaria: false,
                    pedra_nos_rins: "não",
                    problema_nos_testiculos: "não",
                    utiliza_remedios: "não",
                }
            }
        }
    })

    const maria = await prismaClient.paciente.create({
        data:{
            nome: "Maria Fernandez",
            cpf: "111.222.333-44",
            data_nascimento: "1990-01-15",
            endereco: "Rua das Flores",
            numero: 123,
            bairro: "Centro",
            complemento: "Apto 2B",
            cep: 54321,
            telefone: "(11) 98765-1111",
            email: "usuario1@example.com",
            created_at: "2023-11-07T14:00:00Z",
            updated_at: "2023-11-07T15:45:00Z",
            deleted_at: null,
            is_active: true,
            anamnese:{
                create:{
                    created_at: "2023-11-07T15:45:00Z",
                    deleted_at: "2023-11-07T15:45:00Z",
                    is_active: true,
                    updated_at: "2023-11-07T15:45:00Z",
                    bebidas_alcoolicas: "não",
                    doenca_cronica: "não",
                    droga: "não",
                    dst: "não",
                    fumante: "não",
                    historico_de_cancer_na_familia: "não",
                    infeccao_urinaria: false,
                    pedra_nos_rins: "não",
                    problema_nos_testiculos: "não",
                    utiliza_remedios: "não",
                }
            }
        }
    })

    const olavo = await prismaClient.paciente.create({
        data:{
            nome: "Olavo",
            cpf: "111.222.333-44",
            data_nascimento: "1990-01-15",
            endereco: "Rua das Flores",
            numero: 123,
            bairro: "Centro",
            complemento: "Apto 2B",
            cep: 54321,
            telefone: "(11) 98765-1111",
            email: "usuario1@example.com",
            created_at: "2023-11-07T14:00:00Z",
            updated_at: "2023-11-07T15:45:00Z",
            deleted_at: null,
            is_active: true,
            anamnese:{
                create:{
                    created_at: "2023-11-07T15:45:00Z",
                    deleted_at: "2023-11-07T15:45:00Z",
                    is_active: true,
                    updated_at: "2023-11-07T15:45:00Z",
                    bebidas_alcoolicas: "não",
                    doenca_cronica: "não",
                    droga: "não",
                    dst: "não",
                    fumante: "não",
                    historico_de_cancer_na_familia: "não",
                    infeccao_urinaria: false,
                    pedra_nos_rins: "não",
                    problema_nos_testiculos: "não",
                    utiliza_remedios: "não",
                }
            }
        }
    })

    const Drpierre = await prismaClient.usuario.create({
        data:{
            nome:"Dr.Pierre",
            email:"pierre@prisma.com",
            ocupacao:"Medico",
            senha:"pierre",
            updated_at: new Date(),
            created_at: new Date(),
            deleted_at: new Date(),
            is_active: true,
            controle_agendamento:{
                create:{
                    create_agendamento: false,
                    delete_agendamento: false,
                    read_agendamento: true,
                    update_agendamento: false
                }
            },
            controle_anamnese: {
                create:{
                    create_anamnese: true,
                    delete_anamnese: true,
                    read_anamnese: true,
                    update_anamnese: true
                }
            },
            controle_consulta: {
                create: {
                    create_consulta: true,
                    delete_consulta: true,
                    read_consulta: true,
                    update_consulta: true
                }
            },
            controle_paciente: {
                create:{
                    create_paciente: true,
                    delete_paciente: true,
                    read_paciente: true,
                    update_paciente: true
                }
            },
            controle_usuario: {
                create:{
                    create_usuario: false,
                    delete_usuario: false,
                    read_usuario: true,
                    update_usuario: false
                }
            }
            
        }
    })

    const Dralysson = await prismaClient.usuario.create({
        data:{
            nome:"Dr.Alysson",
            email:"pierre@prisma.com",
            ocupacao:"Medico",
            senha:"pierre",
            updated_at: new Date(),
            created_at: new Date(),
            deleted_at: new Date(),
            is_active: true,
            controle_agendamento:{
                create:{
                    create_agendamento: false,
                    delete_agendamento: false,
                    read_agendamento: true,
                    update_agendamento: false
                }
            },
            controle_anamnese: {
                create:{
                    create_anamnese: true,
                    delete_anamnese: true,
                    read_anamnese: true,
                    update_anamnese: true
                }
            },
            controle_consulta: {
                create: {
                    create_consulta: true,
                    delete_consulta: true,
                    read_consulta: true,
                    update_consulta: true
                }
            },
            controle_paciente: {
                create:{
                    create_paciente: true,
                    delete_paciente: true,
                    read_paciente: true,
                    update_paciente: true
                }
            },
            controle_usuario: {
                create:{
                    create_usuario: false,
                    delete_usuario: false,
                    read_usuario: true,
                    update_usuario: false
                }
            }
            
        }
    })

    
}

main()