declare type Priority = 'low' | 'medium' | 'urgent' | 'extreme';
declare type Status = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
declare type Type = 'question' | 'task' | 'problem' | 'incident';
declare type List = {
    id: number;
    value: string;
};
export declare type UpdateTicketRequest = {
    subject?: string;
    client_id?: number;
    group_id?: number;
    assignee_id?: number;
    user_id?: number;
    tag?: string;
    priority?: Priority;
    status?: Status;
    type?: Type;
    field_id?: string;
    field_value?: string;
    list?: List[];
};
export declare type UpdateTicketResponse = {
    status: string;
};
export declare const updateTicket: (ticketId: number, params?: UpdateTicketRequest) => Promise<UpdateTicketResponse>;
export {};
