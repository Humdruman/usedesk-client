declare type Messenger = {
    identity: string;
    type: 'telegram' | 'whatsapp' | 'viber' | 'skype' | 'gtalk' | 'imessage' | 'other';
    uid: string;
};
export declare type CreateClientRequest = {
    name?: string;
    emails?: [string];
    messengers?: [Messenger];
    note?: string;
    is_new_note?: boolean;
    phone?: string;
    status?: 'vip' | 'spammer';
};
export declare type CreateClientResponse = {
    client_id: number;
    status: true;
};
export declare const createClient: (params?: CreateClientRequest) => Promise<CreateClientResponse>;
export {};
