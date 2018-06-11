import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';
import { IMessageType } from '../imessage';

@Component({
  selector: 'message-status',
  templateUrl: './message-status.component.html',
  styleUrls: ['./message-status.component.css']
})
export class MessageStatusComponent implements OnInit, OnDestroy {

  messages;

  subscription;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.subscription = this.messageService.getMessages(IMessageType.Warning)
      .subscribe(messages => this.messages = messages);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  removeAll() {
    this.messageService.removeAll();
  }
}
