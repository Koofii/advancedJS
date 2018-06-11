import { Injectable } from '@angular/core';
import { IMessage, IMessageType } from './imessage';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class MessageService {

  private messageId = 0;
  private messageHistory: IMessage[] = [];

  private subject = new Subject<IMessage[]>();

  constructor() { }

  getMessageTypes(): string[] {
    const messageTypes = [];

    for (let messageType in IMessageType) {
      messageTypes.push(IMessageType[messageType]);
    }

    return messageTypes;
  };

  getMessages(messageType: IMessageType): Observable<IMessage[]> {
    return this.subject.asObservable()
      .map(
        _messageHistory => _messageHistory.filter(
          message => message.type === messageType
        )
      )
  }

  send(message: string, messageType: IMessageType) {
    this.messageHistory.push({
      id: ++this.messageId,
      content: message,

      type: messageType
    });

    this.updateSubscribers();
  }

  remove(messageId: number) {
    this.messageHistory 
      = this.messageHistory.filter(message => message.id !== messageId);

    this.updateSubscribers();
  }

  removeAll() {
    this.messageHistory = [];

    this.updateSubscribers();
  }

  updateSubscribers() {
    this.subject.next(this.messageHistory);
  }
}