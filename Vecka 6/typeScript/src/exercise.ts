// enum ActionType {
//     OP_FOO,
//     OP_BAR
// };

enum Operation {
    OP_FOO,
    OP_BAR
}

interface Service {
    execute(op: Operation, ...args): Promise<any>
};

class ServiceA implements Service {
    execute(op: Operation, ...args: any[]): Promise<any> {
        if(op === Operation.OP_FOO){
            return Promise.reject(`Operation ${Operation[op]} not supported`)
        }
        return Promise.resolve(args[0]);
    }
}

class ServiceB implements Service {
    constructor(private returnValue?: any){}

    execute(op: Operation, ...args: any[]): Promise<any> {
        if(this.returnValue){
            return Promise.resolve(this.returnValue);
        }
        return Promise.resolve(args[0])
    }
}

const logAndExecute = (service: Service, op: Operation, ...params) => {
    console.log(`Operation to execute ${Operation[op]}`);

    service.execute(op, params)
        .then(value => console.log(`Result of execution ${value}`))
        .catch(err => console.log(err));
};

// const logAndExecute(service: Service, op: Operation) => {
//     service.execute(op, ...)
//     .then(value => console.log(value))
//     .catch(err => console.log(err))
// }

export default () => {
    const sa = new ServiceA();
    const sb = new ServiceB(52)
    logAndExecute(sa, Operation.OP_FOO);
    logAndExecute(sa, Operation.OP_BAR, 42);
    logAndExecute(sb, Operation.OP_FOO)
}