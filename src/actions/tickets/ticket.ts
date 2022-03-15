import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";
import {Usedesk, UsedeskTrigger} from "../../types";

export type TicketRequest = {
    accessible_for_agent_id?: number,
    properties?: unknown
}

export type TicketResponse = {
    ticket: Usedesk.Ticket,
    tags: string[],
    changes: UsedeskTrigger.Trigger[],
    custom_fields: Usedesk.CustomField[],
    comments: Usedesk.Comment[]
}

export const getTicket = async (ticketId: number, params: TicketRequest = {}, dispatch: Dispatch = globalDispatch) => {
    return await dispatch<TicketResponse>('/ticket', Object.assign(params, {ticket_id: ticketId}))
}

export type GetTicketAction = typeof getTicket;
