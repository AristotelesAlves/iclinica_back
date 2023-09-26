interface UserInterface {
    id: number ;
    nome:string;
    senha: string;
    ocupacao: string;
    create_agendamento: boolean;
    delete_agendamento: boolean;
    read_agendamento: boolean;
    update_agendamento: boolean;
    create_anamnese: boolean;
    delete_anamnese: boolean;
    read_anamnese: boolean;
    update_anamnese: boolean;
    create_consulta: boolean;
    delete_consulta: boolean;
    read_consulta: boolean;
    update_consulta: boolean;
    create_paciente: boolean;
    delete_paciente: boolean;
    read_paciente: boolean;
    update_paciente: boolean;
}

export { UserInterface }