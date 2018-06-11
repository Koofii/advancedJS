import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunComponent } from './run/run.component';
import { DynamicTabsComponent } from './dynamic-tabs/dynamic-tabs.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RunComponent],
  declarations: [RunComponent, DynamicTabsComponent]
})
export class SwitchCaseModule { }
