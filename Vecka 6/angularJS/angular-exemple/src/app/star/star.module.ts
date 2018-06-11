import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RunComponent } from './run/run.component';
import { StarNoPropsComponent } from './star-no-props/star-no-props.component';
import { StarWithPropsComponent } from './star-with-props/star-with-props.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RunComponent],
  declarations: [RunComponent, StarNoPropsComponent, StarWithPropsComponent]
})
export class StarModule { }
