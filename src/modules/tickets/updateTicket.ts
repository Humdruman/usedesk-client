import {dispatch} from "../../core";

type Priority = 'low' | 'medium' | 'urgent' | 'extreme';

type Status = 1|2|3|4|5|6|7|8|9|10;

type Type = 'question'|'task' |'problem' |'incident'

type List = {
    id: number,
    value: string
}

export type UpdateTicketRequest = {
    subject?: string,
    client_id?: number,
    group_id?: number,
    assignee_id?: number,
    user_id?: number,
    tag?: string,
    priority?: Priority,
    status?: Status,
    type?: Type,
    field_id?: string,
    field_value?: string,
    list?: List[]
}

export type UpdateTicketResponse = {
    status: string
}


export const updateTicket = async (ticketId: number, params: UpdateTicketRequest = {}) => {
    return await dispatch<UpdateTicketResponse>('/update/ticket',Object.assign(params, {
        ticket_id: ticketId
    }))
}
