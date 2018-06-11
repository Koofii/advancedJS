import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//import our example module(s)
// import { BasicModule as RunModule } from './basic/basic.module'
// import { PropertyBindingModule as RunModule} from './property-binding/property-binding.module'
// import { CounterModule as RunModule } from './counter/counter.module'
// import { StarModule as RunModule } from './star/star.module'
// import { CounterModule as RunModule } from './counter2/counter.module'
import { ListProductsModule as RunModule } from './list-products/list-products.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    RunModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



//För att skapa modul: ng generate module basic
//För att skapa komponent: ng g c basic/run
