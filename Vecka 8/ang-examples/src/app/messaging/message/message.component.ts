import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() messageData;
  @Output() onRemove = new EventEmitter()

  remove() {
    this.onRemove.emit(this.messageData.id);
  }
}
