import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunComponent } from './run/run.component';
import { CapsPipe } from './caps.pipe';
import { SummaryPipe } from './summary.pipe';
import { DatetickPipe } from './datetick.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RunComponent],
  declarations: [RunComponent, CapsPipe, SummaryPipe, DatetickPipe]
})
export class PipeModule { }
