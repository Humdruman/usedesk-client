import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";


export type ClientsRequest = {
    created_after?: string,
    created_before?: string,
    offset?: number,
    query?: string,
    search_type?: 'partial_match'|'full_match'
}

export type ClientsResponse = {
    id: number,
    name: string,
    emails: string,
    phone: string,
    tickets: [number]
}

export const clients = async (params: ClientsRequest = {}, dispatch: Dispatch = globalDispatch) => {
    return await dispatch<[ClientsResponse]>('/clients', params)
}

export type ClientsAction = typeof clients;



