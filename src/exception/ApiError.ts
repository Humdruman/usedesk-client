export default class ApiError extends Error {
    constructor(message: string, public code: number) {
        super(message);
        this.name = ApiError.name;
    }

    get error(): string {
        return this.message;
    }

    set error(message: string) {
        this.message = message;
    }

    [Symbol.toStringTag]: "Error"
}


