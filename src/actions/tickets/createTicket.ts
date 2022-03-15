import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";
import {Usedesk} from "../../types";


interface ListItem {
    id: number,
    value: string
}

export type CreateTicketRequest = {
    client_name?: string,
    client_email?: string,
    client_id?: number|'new_client',
    company_name?: string,
    private_comment?: boolean,
    additional_id?: string,
    type?: Usedesk.TicketType,
    priority?: Usedesk.TicketPriority,
    status?: Usedesk.Status,
    tag?: string,
    assignee_id?: number,
    group_id?: number,
    client_phone?: string,
    channel_id?: number,
    files?: Usedesk.Utils.UploadFile[],
    field_id?: string,
    field_value?: string,
    from?: Usedesk.SubjectType,
    user_id?: number,
    trigger_id?: number,
    client_country?: string,
    client_city?: string,
    client_address?: string,
    new_address?: boolean,
    phone_type?: Usedesk.PhoneType,
    lists?: ListItem[]

}

export type CreateTicketResponse = {
    status: string,
    ticket_id: number
}

export const createTicket = async (
    subject: string,
    message: string,
    params: CreateTicketRequest = {},
    dispatch: Dispatch = globalDispatch) => {
    return await dispatch<CreateTicketResponse>('/create/ticket', Object.assign(params, {
        subject,
        message
    }));
}

export type CreateTicketAction = typeof createTicket;
