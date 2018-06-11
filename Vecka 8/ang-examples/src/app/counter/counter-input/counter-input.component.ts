import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'counter-input',
  templateUrl: './counter-input.component.html',
  styleUrls: ['./counter-input.component.css']
})
export class CounterInputComponent {

  @Output() counterUpdated = new EventEmitter()
  
  counter = 0;
  updateBy = 1;

  update(value) {
    this.updateBy = Number(value);
    this.counter += this.updateBy;

    // we've now updated our counter; emit the counter value to the parent
    // component (= RunComponent).
    this.counterUpdated.emit(this.counter);
  }
}
