import {getTickets, TicketsResponse, TicketsRequest} from './tickets'
import {getTicket, TicketResponse, TicketRequest} from "./ticket";
import {updateTicket, UpdateTicketResponse, UpdateTicketRequest} from "./updateTicket";
import {createComment, CreateCommentResponse, CreateCommentRequest } from "./comment";
import {createTicket, CreateTicketResponse, CreateTicketRequest} from "./createTicket";
import {fields} from "./fields";


export type {
    TicketsResponse,
    TicketsRequest,
    TicketResponse,
    TicketRequest,
    UpdateTicketRequest,
    UpdateTicketResponse,
    CreateCommentResponse,
    CreateCommentRequest,
    CreateTicketRequest,
    CreateTicketResponse,
}


export {
    getTickets,
    getTicket,
    updateTicket,
    createComment,
    createTicket,
    fields
}
