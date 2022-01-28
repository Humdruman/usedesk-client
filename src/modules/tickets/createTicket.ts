import {dispatch} from "../../core";


export type CreateTicketRequest = {
    client_name?: string,
    client_email?: string,
    client_id?: number,
    company_name?: string,
    private_comment?: boolean,
    additional_id?: string,
    type?: 'question' | 'task' | 'problem' | 'incident',
    priority?: 'low' | 'medium' | 'urgent' | 'extreme',
    tag?: string,
    field_id?: string,
    field_value?: string,
    assignee_id?: number,
    from?: 'user'|'client'|'trigger'
}

export type CreateTicketResponse = {
    status: string,
    ticket_id: number
}

export const createTicket = async (subject: string, message: string, params: CreateTicketRequest = {}) => {
    return await dispatch<CreateTicketResponse>('/create/ticket', Object.assign(params, {
        subject,
        message
    }));
}
