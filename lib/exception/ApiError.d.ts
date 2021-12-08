export default class ApiError extends Error {
    code: number;
    constructor(message: string, code: number);
    get error(): string;
    set error(message: string);
    [Symbol.toStringTag]: "Error";
}
