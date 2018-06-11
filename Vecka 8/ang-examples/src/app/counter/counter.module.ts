import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunComponent } from './run/run.component';
import { CounterInputComponent } from './counter-input/counter-input.component';
import { CounterShowComponent } from './counter-show/counter-show.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RunComponent
  ],
  declarations: [RunComponent, CounterInputComponent, CounterShowComponent]
})
export class CounterModule { }
