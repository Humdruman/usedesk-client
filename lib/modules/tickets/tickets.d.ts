declare type Fassigned = {
    assignee_id?: number | 'unassinged';
    group_id?: number | 'unassinged';
};
declare type Status = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
declare type FType = 'question' | 'task' | 'problem' | 'incident';
declare type FPriority = 'low' | 'medium' | 'urgent' | 'extreme';
declare type Sort = 'id' | 'status_id' | 'client_id' | 'assignee_id' | 'group' | 'last_updated_at' | 'published_at';
export declare type Field = {
    id: number;
    value: string | 'empty' | 'not_empty';
};
export declare type TicketsRequest = {
    fchannel?: string;
    fassigned?: Fassigned | Fassigned[];
    fgroup?: number;
    fstatus?: Status;
    ftype?: FType;
    fpriority?: FPriority;
    accessible_for_agent_id?: number;
    offset?: number;
    tag?: string;
    created_after?: string;
    created_before?: string;
    updated_after?: string;
    updated_before?: string;
    query?: string;
    client_id?: number;
    fields?: Field[];
    sort?: Sort;
    order?: 'asc' | 'desc';
    properties?: any;
};
export declare type TicketsResponse = {
    id: number;
    subject: string;
    client_id: number;
    client_name: string;
    assignee_id: number;
    channel_id: null;
    group: number;
    created_at: Date;
    last_updated_at: Date;
    channel_email: null;
    active_sla: ActiveSla[];
    ticket_fields: TicketField[];
    tags: Tag[];
    status: number;
    priority: string;
    type: string;
    last_comment: string;
    remind_at: null;
    rights: string;
};
export declare type ActiveSla = {
    type: string;
    date: Date;
};
export declare type Tag = {
    name: string;
};
export declare type TicketField = {
    id: number;
    name: string;
    value: null | string;
};
export declare const getTickets: (params?: TicketsRequest) => Promise<TicketsResponse[]>;
export {};
