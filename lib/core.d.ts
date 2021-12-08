export declare const apiToken: (apiToken: string) => void;
export declare const dispatch: <ResponseData extends unknown>(url: string, body?: import("./contracts/RequestBody").RequestBody, method?: import("axios").Method) => Promise<ResponseData>;
