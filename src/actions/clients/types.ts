import {Usedesk} from "../../types";


export interface Messenger {
    identity: string,
    type: Usedesk.MessengerType,
    uid?: string
}


export interface MutateClientBody {
    name?: string,
    emails?: string[],
    messengers?: Messenger[],
    note?: string,
    is_new_note?: boolean,
    phone?: string,
    avatar?: Usedesk.Utils.UploadFile,
    status?: 'vip' | 'spammer',
    position?: string,
    merge_id?: number,
    client_country?: string,
    client_city?: string,
    client_address?: string,
    new_address?: boolean,
    phone_type?: Usedesk.PhoneType
}
