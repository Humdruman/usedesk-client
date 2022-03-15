import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";
import {Usedesk} from "../../types";

type Fassigned = {
    assignee_id?: number | 'unassinged',
    group_id?: number | 'unassinged'
}

export type Sort = 'id' | 'status_id' | 'client_id' | 'assignee_id' | 'group' | 'last_updated_at' | 'published_at';

export type Field = {
    id: number,
    value: string|'empty'|'not_empty'
}

export interface TicketsRequest {
    fchannel?: string,
    fassigned?: Fassigned | Fassigned[],
    fgroup?: number,
    fstatus?: Usedesk.Status,
    ftype?: Usedesk.TicketType,
    fpriority?: Usedesk.TicketPriority,
    accessible_for_agent_id?: number,
    offset?: number,
    tag?: string,
    created_after?: string,
    created_before?: string,
    updated_after?: string,
    updated_before?: string,
    query?: string,
    client_id?: number,
    fields?: Field[],
    sort?: Sort,
    order?: 'asc'|'desc'
    properties?: unknown
}


type TicketsResponse = Usedesk.TicketSlice[]

export const getTickets =  async (params: TicketsRequest  = {}, dispatch: Dispatch = globalDispatch ) => {
    return dispatch<TicketsResponse>('/tickets', params)
}

export type GetTicketsAction = typeof getTickets;
