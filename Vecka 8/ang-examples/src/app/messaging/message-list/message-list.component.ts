import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs/Subscription';
import { IMessageType } from '../imessage';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnDestroy {

  messages;
  subscription: Subscription

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.subscription = this.messageService.getMessages(IMessageType.Normal) 
      .subscribe(messages => {
        this.messages = messages;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  send(message, messageType) {
    this.messageService.send(message, messageType);
  }

  remove(messageId) {
    this.messageService.remove(messageId);
  }
}
