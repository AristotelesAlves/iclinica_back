interface UserInterface {
    nome:string;
    senha: string;
    email: string;
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
    create_usuario: boolean;
    delete_usuario: boolean;
    read_usuario: boolean;
    update_usuario: boolean;
}

export { UserInterface }