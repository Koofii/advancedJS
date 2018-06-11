import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { AppErrorHandler } from './appErrorHandler';
// ...
// Import example module(s) to run.

// import { CounterModule as RunModule } from './counter/counter.module';
// import { MessagingModule as RunModule } from './messaging/messaging.module';
// import { NgformsModule as RunModule } from './ngforms/ngforms.module';
// import { TodoModule as RunModule } from './todo/todo.module';

// import { NgContentModule as RunModule } from './ng-content/ng-content.module'
// import { SwitchCaseModule as RunModule } from './switch-case/switch-case.module'
// import { PipeModule as RunModule} from './pipe/pipe.module'
import { RoutingModule as RunModule } from './routing/routing.module'



// ...

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    RunModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
