import {Dispatch} from "./dispatch";
import {createDispatch} from "./dispatch";
import * as actions from './actions'
import defaultSetting from './env/default'
import type {
    ClientsAction,
    CreateClientAction,
    CreateTicketAction,
    CreateCommentAction,
    FieldsAction,
    GetTicketAction,
    GetTicketsAction,
    UpdateTicketAction,
    GetUserAction,
    GetUsersAction
} from "./actions";



type ClientsActions = {
    clients: ClientsAction;
    createClient: CreateClientAction
}

type TicketsActions = {
    getTicket: GetTicketAction,
    getTickets: GetTicketsAction,
    createTicket: CreateTicketAction,
    updateTicket: UpdateTicketAction,
    fields: FieldsAction,
    createComment: CreateCommentAction,
}

type UsersActions = {
    getUser: GetUserAction,
    getUsers: GetUsersAction
}

class Client {
    readonly dispatch: Dispatch;

    constructor(private token: string, private _baseUrl: string = defaultSetting.baseUrl) {
        this.dispatch = createDispatch({apiToken: token, baseUrl: _baseUrl})
    }

    public get baseUrl() {
        return this._baseUrl
    }


}

export type UsedeskClient = Client & ClientsActions & TicketsActions & UsersActions;



export const createApiClient = (token: string, baseUrl:string = defaultSetting.baseUrl): UsedeskClient => {
    const actionsHandler = {
        get(target: Client & {[key: string]: any}, propName: string) {
            if(propName in target) {
                return target[propName];
            }


            if(propName in actions) {
                return (...args: any[]) => {
                    // @ts-ignore
                    const action = actions[propName] as Function;
                    const actionArgs = Array(action.length);
                    actionArgs[action.length - 1] = target.dispatch;
                    const actionArgsTail = actionArgs.slice(args.length < 1 ? 0 : args.length);
                    const actionsArgsFinal = args.concat(actionArgsTail);
                    // @ts-ignore
                    return actions[propName].apply(target, actionsArgsFinal)
                };
            }

            throw new Error(`Invalid method ${propName} in Usedesk client`)
        }
    }

    return (new Proxy<Client>(new Client(token, baseUrl), actionsHandler)) as UsedeskClient;
}




