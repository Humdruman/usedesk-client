import {dispatch} from "../../core";


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

export const clients = async (params: ClientsRequest = {}) => {
    return await dispatch<[ClientsResponse]>('/clients', params)
}



