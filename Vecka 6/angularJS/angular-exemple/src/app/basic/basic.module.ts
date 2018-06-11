import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunComponent } from './run/run.component';
import { UserService } from './user.service';
import { LogserviceService } from './logservice.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    RunComponent
  ],
  declarations: [RunComponent],
  providers: [UserService, LogserviceService]
})
export class BasicModule { }

