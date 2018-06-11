import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunComponent } from './run/run.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RunComponent
  ],
  declarations: [RunComponent, PanelComponent]
})
export class NgContentModule { }
