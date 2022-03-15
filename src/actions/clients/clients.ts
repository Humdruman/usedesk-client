import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";
import {Usedesk} from "../../types";


type GetClientsReturned =  {
    id: Usedesk.Client['id'],
    name: Usedesk.Client['name'],
    tickets: Usedesk.Client['tickets'],
    phone: string|null,
    emails: string|null
}

type GetClientsResponse = GetClientsReturned[]


export type GetClientsRequest = {
    created_after?: string,
    created_before?: string,
    offset?: number,
    query?: string,
    search_type?: 'partial_match'|'full_match'
}

export const clients = async (params: GetClientsRequest = {}, dispatch: Dispatch = globalDispatch) => {
    return await dispatch<GetClientsResponse>('/clients', params)
}

export type ClientsAction = typeof clients;



