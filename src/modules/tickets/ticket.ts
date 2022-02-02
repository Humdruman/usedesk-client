import {dispatch} from "../../core";

export type TicketRequest = {
    accessible_for_agent_id?: number,
    properties?: any
}

export type TicketResponse = {
    ticket: Ticket;
    changes:         Change[];
    tags:            string[];
    custom_fields:   CustomField[];
    rights:          string;
}

export type Ticket = {
    id:              number;
    status_id:       number;
    priority:        string;
    type:            string;
    subject:         string;
    client_id:       number;
    assignee_id:     number;
    group:           number;
    last_updated_at: Date;
    email:           string;
    published_at:    Date;
    company_id:      number;
    channel_id:      number;
    additional_id:   string;
    client_name:     string;
    active_sla:      ActiveSla[];
    comments:        Comment[];
}

export type ActiveSla = {
    type: string;
    date: Date;
}

export type Change = {
    id:         number;
    trigger_id: number | null;
    user_id:    null;
    ticket_id:  number;
    data:       Datum[];
    changed_at: Date;
    old_status: number;
    new_status: number;
    company_id: number;
}

export type Datum = {
    target: string;
    value:  string;
}

export type Comment = {
    id:           number;
    message:      string;
    from:         string;
    type:         string;
    user_id:      null;
    client_id:    number;
    client_name:  string;
    ticket_id:    number;
    is_first:     number;
    delivered:    number;
    readed:       number;
    published_at: Date;
    file:         number;
    files:        File[];
    bcc:          string[];
    cc:           string[];
}

export type File = {
    name: string;
    type: string;
    file: string;
}

export type CustomField  = {
    id:              number;
    ticket_id:       number;
    ticket_field_id: number;
    value:           string;
}

export const getTicket = async (ticketId: number, params: TicketRequest = {}) => {
    return await dispatch<TicketResponse>('/ticket',Object.assign(params, {
        ticket_id: ticketId
    }))
}
