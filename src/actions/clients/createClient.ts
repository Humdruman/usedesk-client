import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";

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


export const createClient = async (params: CreateClientRequest = {}, dispatch: Dispatch = globalDispatch) => {
    return await dispatch<CreateClientResponse>('/create/client', params);
}

export type CreateClientAction = typeof createClient;
