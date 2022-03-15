import {Dispatch} from "./dispatch";
import {createDispatch} from "./dispatch";
import * as actions from './actions'
import defaultSetting from './env/default'
import type {
    ClientsAction,
    ClientAction,
    UpdateClientAction,
    CreateClientAction,
    CreateTicketAction,
    CreateCommentAction,
    FieldsAction,
    GetTicketAction,
    GetTicketsAction,
    UpdateTicketAction,
    GetTagsAction,
    GetUserAction,
    GetUsersAction,
    CreateUserAction,
    UpdateUserAction,
    DeleteUserAction,
    GetGroupsAction,
    GetChannelsAction
} from "./actions";



type ClientsActions = {
    getClient: ClientAction;
    clients: ClientsAction;
    updateClient: UpdateClientAction;
    createClient: CreateClientAction;
}

type TicketsActions = {
    getTicket: GetTicketAction,
    getTickets: GetTicketsAction,
    createTicket: CreateTicketAction,
    updateTicket: UpdateTicketAction,
    fields: FieldsAction,
    getTags: GetTagsAction,
    createComment: CreateCommentAction,
}

type UsersActions = {
    getUser: GetUserAction,
    getUsers: GetUsersAction,
    deleteUser: DeleteUserAction,
    updateUser: UpdateUserAction,
    createUser: CreateUserAction,
    getGroups: GetGroupsAction
}

type ChannelsActions = {
    getChannels: GetChannelsAction
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

export type UsedeskClient = Client & ClientsActions & TicketsActions & UsersActions & ChannelsActions;



export const createApiClient = (token: string, baseUrl:string = defaultSetting.baseUrl): UsedeskClient => {
    const actionsHandler = {
        get(target: UsedeskClient & {[key: string]: any}, propName: string) {
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




