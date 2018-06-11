import { ErrorHandler } from "@angular/core";
import { TodoError, TodoErrorType } from "./todo/todoError";

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        if (error instanceof TodoError){
            alert(`Got a todo error: ${TodoErrorType[error.type]}`)
        } else {
            console.log("Unknown application error!")
        }
    }
}