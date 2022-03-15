import {globalDispatch} from "../../core";
import {Dispatch} from "../../dispatch";
import {Usedesk} from "../../types";


export type ClientReturned = {
    client: Usedesk.Client,
    emails: null[],
    phones: Usedesk.Client['phones'],
    social_networks: Usedesk.Client['social_networks'],
    messengers: Usedesk.Client['messengers'],
    addresses: Usedesk.Client['addresses'],
    sites: Usedesk.Client['sites'],
    client_company: Usedesk.Client['client_company']
}

type GetClientResponse = ClientReturned[];





export const getClient = async (clientId: number, dispatch: Dispatch = globalDispatch) => {
    return await dispatch<GetClientResponse>('/client', {client_id: clientId})
}


export type ClientAction = typeof getClient;
