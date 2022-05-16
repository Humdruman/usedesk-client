import {Usedesk} from "./Usedesk";
import {UsedeskTrigger} from "./UsedeskTrigger";


export namespace UsedeskWebhook {

    export interface Webhook {
        secret: string,
        [key: string]: any
    }


    export interface NewTicket extends Webhook{
        secret: string,
        ticket: Ticket,
        client: Client,
        custom_fields: Usedesk.TicketField[],
        custom_blocks: Usedesk.CustomBlock[]
    }



    export interface NewComment extends Webhook{
        secret: string,
        comment: Omit<Usedesk.Comment, 'bcc' | 'cc' | 'client' | 'user' | 'client_name'>,
        custom_fields: Usedesk.TicketField[],
        client: Client,
        assignee_id: number | null
    }

    export interface UpdatedTicket extends Webhook{
        secret: string,
        trigger: UsedeskTrigger.Trigger,
        custom_fields: Usedesk.TicketField[],
        custom_blocks: Usedesk.CustomBlock[],
        client: Client,
        assignee_id: number | null
    }

    export interface Csi extends  Webhook{
        secret: string,
        csi: {
            id: number,
            user_id: number | null,
            client_id: number | null,
            ticket_id: number,
            rating: number,
            company_id: number,
            ticket_comment_id: number,
            comment: string,
            created_at: string,
            updated_at: string
        }
    }

    export interface Chat extends Webhook{
        chat_id: number,
        text: string,
        client_id: number,
        client: Client
        from: Exclude<Usedesk.SubjectType, 'trigger'>,
        platform: string,
        secret: string,
        ticket: Ticket,
        state: ChatState | null
    }

    export type ChatState = 'new'|'reopened'|'closed'


    type Ticket = Omit<Usedesk.Ticket, 'client_name' | 'priority' | 'type'> & {
        message: string,
        files: string[]
    }

    interface Client {
        id: Usedesk.Client['id'],
        name: Usedesk.Client['name'],
        avatar: Usedesk.Client['avatar'],
        note: Usedesk.Client['note'],
        emails: Pick<Usedesk.Email, 'email' | 'client_id'>[],
        phones: Pick<Usedesk.Phone, 'phone' | 'type' | 'client_id'>[],
        additional_ids: AdditionalId[]
    }

    interface AdditionalId {
        value: string,
        client_id: number
    }


    export const isNewTicket = (o: unknown): o is NewTicket => isWebhook(o) && !('chat_id' in o) && 'ticket' in o;
    export const isUpdateTicket = (o: unknown): o is UpdatedTicket => isWebhook(o) && 'trigger' in o;
    export const isNewComment = (o: unknown): o is NewComment => isWebhook(o) && 'comment' in o;
    export const isCsi = (o: unknown): o is Csi => isWebhook(o) && 'csi' in o;
    export const isChat = (o: unknown): o is Chat => isWebhook(o) && 'chat_id' in o;


    const isWebhook = (o: unknown): o is Webhook => {
        return typeof o === 'object' && o !== null && 'secret' in o;
    }


}
