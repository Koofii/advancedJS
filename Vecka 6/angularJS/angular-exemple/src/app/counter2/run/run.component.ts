import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
// export class RunComponent implements OnInit {

//   value;
//   number = 0;

//   changeNumber(){
//     this.number = this.number + this.value;
//   }
  
//   changeValue(event){
//     console.log(event.target.value)
//     this.value = Number(event.target.value);
//   }

//   constructor() { }

//   ngOnInit() {
//   }
// }
export class RunComponent implements OnInit {

  value = 1;

  updateCount(event){
    this.value = this.value + Number(event)
  }

  constructor() { }

  ngOnInit() {
  }
}