import { Component } from '@angular/core';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent {

  // if you want to perform two-way binding to form elements using [(ngModel)], list the 
  // corresponding class properties here.
  //
  // userName = ''

  accountTypes = [
    'Free',
    'Premium'
  ];
  
  submit(f) {
    console.log(f);
    console.log(f.value); // all the form element values are available in the f.value object.
  }
}
