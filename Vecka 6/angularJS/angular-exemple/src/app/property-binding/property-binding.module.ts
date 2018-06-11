import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunComponent } from './run/run.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RunComponent
  ],
  declarations: [RunComponent]
})
export class PropertyBindingModule { }
