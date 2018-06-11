import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunComponent } from './run/run.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageService } from './message.service';
import { MessageComponent } from './message/message.component';
import { MessageStatusComponent } from './message-status/message-status.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RunComponent
  ],
  providers: [
    MessageService
  ],
  declarations: [RunComponent, MessageListComponent, MessageComponent, MessageStatusComponent]
})
export class MessagingModule { }
