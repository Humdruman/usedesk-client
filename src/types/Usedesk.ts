import {UsedeskTrigger} from "./UsedeskTrigger";


export namespace Usedesk {

    export interface Client {
        id: number;
        name: string;
        avatar: string | null;
        position: string;
        note: string;
        company_id: number;
        zendesk_id: null;
        spammer: Utils.NumberBoolean;
        vip: Utils.NumberBoolean;
        client_company_id: number;
        created_at: string;
        updated_at: string;
        lang: string;
        tickets: number[];
        emails: Email[];
        phones: Phone[];
        social_networks: SocialNetwork[];
        messengers: Messenger[];
        addresses: Address[];
        sites: Site[];
        client_company: Company;
    }

    export interface Email {
        id: number,
        email: string,
        client_id: number,
        fullcontact: Utils.NumberBoolean,
        status: string,
        created_at: string,
        updated_at: string
    }

    export interface Phone {
        id: number;
        phone: string;
        type: PhoneType;
        client_id: number;
        created_at: string;
        updated_at: string;
    }

    export type PhoneType = 'mobile' | 'home' | 'stationary' | 'fax' | 'other'

    export interface Messenger {
        id: number;
        identity: string;
        type: MessengerType;
        client_id: number;
        uid: null | string;
        created_at: string;
        updated_at: string;
    }

    export type MessengerType = 'telegram' | 'whatsapp' | 'viber' | 'skype' | 'gtalk' | 'imessage' | 'other';

    export interface SocialNetwork {
        id: number;
        url: Utils.Url;
        type: SocialNetworkType;
        client_id: number;
        uid: null;
        nickname: string;
        fullcontact: number;
        created_at: string;
        updated_at: string;
    }

    export interface Address {
        id: number;
        country: string;
        city: string;
        address: string;
        type: AddressType;
        client_id: number;
        created_at: string;
        updated_at: string;
    }

    export type AddressType = 'home' | 'work' | 'postal'

    export interface Site {
        id: number,
        url: Utils.Url,
        client_id: number,
        created_at: string;
        updated_at: string;
    }

    export interface Company {
        id: number;
        name: string;
        note: string;
        domains: string;
        phone: string;
        address: string;
        vip: Utils.NumberBoolean;
        company_id: number;
        avatar: string;
        created_at: string;
        updated_at: string;
    }

    export interface User {
        id: number,
        name: string,
        email: string,
        position: string,
        role: UserRole,
        phone: string | null,
        online_status: Utils.NumberBoolean,
        avatar: string | null,
        chat_online_status: Utils.NumberBoolean,
        groups: UserGroup[]
    }

    export interface UserGroup {
        id: number,
        name: string,
        company_id: number,
        deleted: Utils.NumberBoolean,
        deleted_at: string,
        custom_working_time: Utils.NumberBoolean,
        timezone: string,
        is_demo: Utils.NumberBoolean,
        pivot: UserPivot
    }

    export interface UserPivot {
        user_id: number,
        user_group_id: number
    }

    export interface TicketSlice {
        id: number;
        priority: TicketPriority;
        subject: string;
        client_id: number;
        client_name: string;
        assignee_id: number | null;
        channel_id: number;
        group: number | null;
        last_updated_at: string;
        type: TicketType;
        created_at: string;
        channel_email: string | null;
        ticket_fields: TicketField[];
        tags: { name: string }[];
        status: Status;
        last_comment: string;
        remind_at: null;
    }

    export interface Ticket {
        id: number;
        subject: string;
        priority: TicketPriority;
        client_id: number;
        client_name: string;
        assignee_id: number | null;
        channel_id: number,
        group: number | null,
        last_updated_at: string,
        type: TicketType,
        status_id: Status;
        email: string | null,
        published_at: string,
        company_id: number,
        additional_id: string,
    }

    export interface CustomField {
        id: number,
        ticket_id: number,
        ticket_field_id: number,
        value: string,
        created_at: null,
        updated_at: null
    }

    export interface Comment {
        id: number,
        message: string,
        from: MessageSubject,
        type: MessageType,
        user_id: number | null,
        client_id: number | null,
        client_name: string | null,
        ticket_id: number,
        is_first: Utils.NumberBoolean,
        delivered: Utils.NumberBoolean,
        readed: Utils.NumberBoolean,
        published_at: string,
        file: null,
        bcc: [],
        cc: [],
        files: [],
        client: null | ClientInMessage,
        user: null | UserInMessage
    }

    export interface ClientInMessage {
        id: number;
        name: string;
        avatar: null | string;
        position: string;
        note: string;
        company_id: number;
        zendesk_id: null | number;
        spammer: Utils.NumberBoolean;
        vip: Utils.NumberBoolean;
        client_company_id: null | number;
        created_at: string;
        updated_at: string;
        lang: string;
    }

    export interface UserInMessage {
        id: number;
        email: string;
        avatar: string | null;
        my_signature: string;
        use_signature: string;
        name: string;
        position: string;
        phone: string;
        note: string;
        role: string;
        user_group_id: number | null;
        is_first: Utils.NumberBoolean;
        reply_behavior: string;
        company_id: number;
        last_su_viewed: null;
        zendesk_id: null;
        lang: string;
        confirmation_code: null;
        confirmed: Utils.NumberBoolean;
        default_group: null;
        status: number;
        token: null;
        deleted: Utils.NumberBoolean;
        deleted_at: null;
        get_started: null;
        min_reply_confidence: null;
        min_hint_confidence: null;
        online_status: Utils.NumberBoolean;
        auto_offline: Utils.NumberBoolean;
        assignee_rating_counter: Utils.NumberBoolean;
        created_at: null;
        updated_at: string;
        last_login_at: string;
        must_relogin: Utils.NumberBoolean;
        phone_confirmed: Utils.NumberBoolean;
    }

    export interface Tag {
        ticket_tag_id: number,
        tag_company_id: number,
        name: string,
        ticket_count: number
    }

    export type TicketType = 'question' | 'task' | 'problem' | 'incident'

    export interface TicketField {
        id: number;
        name: string;
        value: null | string;
    }

    export interface Channel {
        channel_id: number,
        channel_name: string,
        channel_type: ChannelType
    }

    export enum ChannelType {
        Email = 'email',
        Facebook = 'facebook',
        Vk = 'vk',
        Telephony = 'telephony',
        Chat = 'chat',
        Wechat = 'wechat',
        Twitter = 'twitter',
        YandexMarket = 'yandex_market',
        Api = 'api',
        Instagram = 'instagram',
        Whatsapp = 'whatsapp'
    }

    export type UserRole = 'admin' | 'employee' | 'support'

    export type MessageSubject = 'user' | 'client' | 'trigger';
    export type MessageType = 'public' | 'private';

    export type TicketPriority = 'low' | 'medium' | 'urgent' | 'extreme'


    export enum Status {
        Opened = 1,
        Completed = 2,
        Closed = 3,
        Deleted = 4,
        OnHold = 5,
        Waiting = 6,
        Spam = 7,
        New = 8,
        Mailing = 9,
        Merged = 10,
    }


    export type SubjectType = 'user' | 'client' | 'trigger';

    export type SocialNetworkType = 'twitter' | 'facebook' | 'vk' | 'ok' | 'instagram' | 'youtube' | 'gplus' | 'other'


    export namespace Utils {
        export type NumberBoolean = 0 | 1;
        export type Url<B = string> = `${'http' | 'https'}://${B extends string ? B : never}`
        export type Email<First extends string = string, Second extends string = string> = `${First}@${Second}`;
        export type UploadFile = unknown;
    }
}
