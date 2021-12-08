import { Method } from "axios";
import { RequestBody } from "./contracts/RequestBody";
import { AppConfig } from "./contracts/AppConfig";
export declare const createDispatch: (appConfig: AppConfig) => <ResponseData extends unknown>(url: string, body?: RequestBody, method?: Method) => Promise<ResponseData>;
