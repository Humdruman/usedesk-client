export declare type CreateTicketRequest = {
    client_name?: string;
    client_email?: string;
    client_id?: number;
    company_name?: string;
    private_comment?: boolean;
    additional_id?: string;
    type?: 'question' | 'task' | 'problem' | 'incident';
    priority?: 'low' | 'medium' | 'urgent' | 'extreme';
    tag?: string;
    field_id?: string;
    field_value?: string;
    assignee_id?: number;
};
export declare type CreateTicketResponse = {
    status: string;
    ticket_id: number;
};
export declare const createTicket: (subject: string, message: string, params?: CreateTicketRequest) => Promise<CreateTicketResponse>;
