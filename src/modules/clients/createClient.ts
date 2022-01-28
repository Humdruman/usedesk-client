import {dispatch} from "../../core";

type Messenger = {
    identity: string,
    type: 'telegram'| 'whatsapp' | 'viber'| 'skype'| 'gtalk'|  'imessage' |  'other',
    uid: string
}

//TODO: дописать параметры
export type CreateClientRequest = {
    name?: string,
    emails?: [string],
    messengers?: [Messenger],
    note?: string,
    is_new_note?: boolean,
    phone?: string,
    status?: 'vip'|'spammer'
}

export type CreateClientResponse = {
    client_id: number,
    status: true
}


export const createClient = async (params: CreateClientRequest = {}) => {
    return await dispatch<CreateClientResponse>('/create/client', params);
}
