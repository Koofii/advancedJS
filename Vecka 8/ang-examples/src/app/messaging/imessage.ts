export enum IMessageType {
    Normal = 'Normal',
    Warning = 'Warning',
    // Critical = 'Critical'
};

export interface IMessage {
    id: number;
    content: string;

    type: IMessageType;
};