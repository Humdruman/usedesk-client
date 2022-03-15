import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";
import {Usedesk} from "../../types/Usedesk";


export interface ListItem {
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
    priority?: Usedesk.TicketPriority,
    status?: Usedesk.Status,
    type?: Usedesk.TicketType,
    field_id?: string,
    field_value?: string,
    list?: ListItem[]
}

export type UpdateTicketResponse = {
    status: string
}


export const updateTicket = async (
    ticketId: number,
    params: UpdateTicketRequest = {},
    dispatch: Dispatch = globalDispatch) => {
    return await dispatch<UpdateTicketResponse>('/update/ticket',Object.assign(params, {
        ticket_id: ticketId
    }))
}

export type UpdateTicketAction = typeof updateTicket;
