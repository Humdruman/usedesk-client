import {Usedesk} from "./Usedesk";

export namespace UsedeskResponse {

    export type ClientResponse = [ClientPayload];
    export type ClientsResponse = ClientsPayload[];
    export type TicketsResponse = Usedesk.Ticket[];
    export type GetUsersResponse = Usedesk.User[]

    export type ClientPayload = {
        client: Usedesk.Client,
        emails: null[]
    } & Pick<Usedesk.Client, 'phones'|'social_networks'|'messengers'|'addresses'|'sites'|'client_company'>

    export type ClientsPayload = Pick<Usedesk.Client, 'id'|'name'|'tickets'> & {phone: string, emails: string}
}
