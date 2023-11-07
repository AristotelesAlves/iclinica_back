import { prismaClient } from "../src/prisma";

async function main(){
    // const adm = await prismaClient.usuario.create({
    //     data: {
    //         nome: 'Aristoteles',
    //         senha:'Aristoteles',
    //         email:'Aristoteles@gmail.com',
    //         ocupacao: 'adm',
    //         is_active: true,
    //         created_at: new Date(),
    //         deleted_at: new Date(),
    //         updated_at: new Date(),
    //     },
    //     include:{
    //         controle:{
    //             include:{
    //                 agendamento: true,
    //                 anamnese: true,
    //                 consulta: true,
    //                 paciente: true,
    //                 usuario_controle: true
    //             }
    //         }
    //     }
    // })

    const medico01 = await prismaClient.usuario.create({
        data: {
            nome: 'Pierre',
            senha:'Pierre',
            email:'Pierre@gmail.com',
            ocupacao: 'medico',
            is_active: true,
            created_at: new Date(),
            deleted_at: new Date(),
            updated_at: new Date(),
            controle_acesso:{
                create:{
                    created_at:new Date(),
                    deleted_at: new Date(),
                    is_active: true,
                    updated_at: new Date(),
                }
            }
        }
    })

    const medico02 = await prismaClient.usuario.create({
        data: {
            nome: 'Olavo',
            senha:'Olavo',
            email:'Olavo@gmail.com',
            ocupacao: 'medico',
            is_active: true,
            created_at: new Date(),
            deleted_at: new Date(),
            updated_at: new Date(),
            controle_acesso:{
                create:{
                    created_at:new Date(),
                    deleted_at: new Date(),
                    is_active: true,
                    updated_at: new Date(),
                }
            }
        }
    })

    // const medico03 = await prismaClient.usuario.create({
    //     data: {
    //         nome: 'Daniel',
    //         senha:'Daniel',
    //         email:'Daniel@gmail.com',
    //         ocupacao: 'medico',
    //         is_active: true,
    //         created_at: new Date(),
    //         deleted_at: new Date(),
    //         updated_at: new Date(),
    //     },
    //     include:{
    //         controle:{
    //             include:{
    //                 agendamento: true,
    //                 anamnese: true,
    //                 consulta: true,
    //                 paciente: true,
    //                 usuario_controle: true
    //             }
    //         }
    //     }
    // })

    // const recepcionista01 = await prismaClient.usuario.create({
    //     data: {
    //         nome: 'Raimunda',
    //         senha:'Raimunda',
    //         email:'Raimunda@gmail.com',
    //         ocupacao: 'recepcionista',
    //         is_active: true,
    //         created_at: new Date(),
    //         deleted_at: new Date(),
    //         updated_at: new Date(),
    //     },
    //     include:{
    //         controle:{
    //             include:{
    //                 agendamento: true,
    //                 anamnese: true,
    //                 consulta: true,
    //                 paciente: true,
    //                 usuario_controle: true
    //             }
    //         }
    //     }
    // })

    // const recepcionista02 = await prismaClient.usuario.create({
    //     data: {
    //         nome: 'Raquel',
    //         senha:'Raquel',
    //         email:'Raquel@gmail.com',
    //         ocupacao: 'recepcionista',
    //         is_active: true,
    //         created_at: new Date(),
    //         deleted_at: new Date(),
    //         updated_at: new Date(),
    //     },
    //     include:{
    //         controle:{
    //             include:{
    //                 agendamento: true,
    //                 anamnese: true,
    //                 consulta: true,
    //                 paciente: true,
    //                 usuario_controle: true
    //             }
    //         }
    //     }
    // })

    const paciente01 = await prismaClient.paciente.create({
        data:{
            nome:'Alysson',
            telefone: '23213',
            cpf:"23131",
            is_active: true,
            created_at:new Date(),
            updated_at:new Date(),
            deleted_at:new Date(),
            anamnese: {
                create:{
                    bebidas_alcoolicas: 'sim, uma dose a cada 3h',
                    doenca_cronica: 'não',
                    dst: 'sim, Aids',
                    droga: 'sim, lolo, cocaina, k9, maconha, heroina',
                    infeccao_urinaria: false,
                    fumante: 'não',
                    historico_de_cancer_na_familia: 'não',
                    pedra_nos_rins: 'não',
                    problema_nos_testiculos: 'não',
                    utiliza_remedios: 'não',
                    is_active:true,
                    created_at: new Date(),
                    deleted_at: new Date(),
                    updated_at: new Date(),
                }
            }
        }
    })

    const paciente02 = await prismaClient.paciente.create({
        data:{
            nome:'Caique',
            telefone: '39783',
            cpf:"2384",
            is_active: true,
            created_at:new Date(),
            updated_at:new Date(),
            deleted_at:new Date(),
            anamnese: {
                create:{
                    bebidas_alcoolicas: 'sim, uma dose a cada 3h',
                    doenca_cronica: 'não',
                    dst: 'sim, Aids',
                    droga: 'sim, lolo, cocaina, k9, maconha, heroina',
                    infeccao_urinaria: false,
                    fumante: 'não',
                    historico_de_cancer_na_familia: 'não',
                    pedra_nos_rins: 'não',
                    problema_nos_testiculos: 'não',
                    utiliza_remedios: 'não',
                    is_active:true,
                    created_at: new Date(),
                    deleted_at: new Date(),
                    updated_at: new Date(),
                }
            }
        }
    })

    const paciente03 = await prismaClient.paciente.create({
        data:{
            nome:'João',
            telefone: '2135',
            cpf:"234284",
            is_active: true,
            created_at:new Date(),
            updated_at:new Date(),
            deleted_at:new Date(),
            anamnese: {
                create:{
                    bebidas_alcoolicas: 'sim, uma dose a cada 3h',
                    doenca_cronica: 'não',
                    dst: 'sim, Aids',
                    droga: 'sim, lolo, cocaina, k9, maconha, heroina',
                    infeccao_urinaria: false,
                    fumante: 'não',
                    historico_de_cancer_na_familia: 'não',
                    pedra_nos_rins: 'não',
                    problema_nos_testiculos: 'não',
                    utiliza_remedios: 'não',
                    is_active:true,
                    created_at: new Date(),
                    deleted_at: new Date(),
                    updated_at: new Date(),
                }
            }
        }
    })

    const agenda01 = await prismaClient.agendamento.create({
        data:{
            created_at: new Date(),
            deleted_at: new Date(),
            updated_at: new Date(),
            data_de_agendado: new Date(),
            observacao: 'Fiado',
            status:'agendado',
            medico:{
                connect:{
                    id:2
                }
            },
            consulta:{
                create:{
                    convenio:"",
                    diagnostico:"",
                    prescricao: "",
                    status:"agendado",
                    created_at: new Date(),
                    deleted_at: new Date(),
                    updated_at: new Date(),
                    paciente:{
                        connect:{
                            id:3
                        }
                    },
                    medico:{
                        connect:{
                            id:2
                        }
                    },
                }
            }
        }
    })
    
    const agenda02 = await prismaClient.agendamento.create({
        data:{
            created_at: new Date(),
            deleted_at: new Date(),
            updated_at: new Date(),
            data_de_agendado: new Date(),
            observacao: 'Pagar na recepção',
            status:'agendado',
            medico:{
                connect:{
                    id: 2
                }
            },
            consulta:{
                create:{
                    convenio:"",
                    diagnostico:"",
                    prescricao: "",
                    status:"agendado",
                    created_at: new Date(),
                    deleted_at: new Date(),
                    updated_at: new Date(),
                    medico:{
                        connect:{
                            id: 2
                        },
                    },
                    paciente:{
                        connect:{
                            id:1
                        }
                    },
                }
            }
        }
    })


    const agenda03 = await prismaClient.agendamento.create({
        data:{
            created_at: new Date(),
            deleted_at: new Date(),
            updated_at: new Date(),
            data_de_agendado: new Date(),
            observacao: 'Pagamento adiantado',
            status:'agendado',
            medico:{
                connect:{
                    id:2
                }
            },
            consulta:{
                create:{
                    convenio:"",
                    diagnostico:"",
                    prescricao: "",
                    status:"agendado",
                    created_at: new Date(),
                    deleted_at: new Date(),
                    updated_at: new Date(),
                    paciente:{
                        connect:{
                            id:2
                        }
                    },
                    medico:{
                        connect:{
                            id:2
                        }
                    },
                }
            }
        }
    })
    
    
}

main()