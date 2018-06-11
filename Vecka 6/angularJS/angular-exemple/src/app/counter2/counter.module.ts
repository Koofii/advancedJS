import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunComponent } from './run/run.component';
import { ShowCountComponent } from './show-count/show-count.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RunComponent],
  declarations: [RunComponent, ShowCountComponent, CounterComponent]
})
export class CounterModule { }
