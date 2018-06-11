export enum TodoErrorType {
    NOT_FOUND,

    //Unexpected (critical) application error types.
    UNKNOWN
}

export class TodoError {
    cause;

    constructor(public type: TodoErrorType = TodoErrorType.UNKNOWN) {
        this.type = type;
    }
}