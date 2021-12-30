export declare type ClientsRequest = {
    created_after?: string;
    created_before?: string;
    offset?: number;
    query?: string;
    search_type?: 'partial_match' | 'full_match';
};
export declare type ClientsResponse = {
    id: number;
    name: string;
    emails: string;
    phone: string;
    tickets: [number];
};
export declare const clients: (params?: ClientsRequest) => Promise<[ClientsResponse]>;
