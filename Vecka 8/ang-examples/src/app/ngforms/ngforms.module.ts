import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RunComponent } from './run/run.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RunComponent
  ],
  declarations: [RunComponent]
})
export class NgformsModule { }
