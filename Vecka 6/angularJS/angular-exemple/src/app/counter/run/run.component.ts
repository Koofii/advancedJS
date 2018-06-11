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

  counter = 0;
  _by = 1;

  get by(){
    return this._by;
  }
  
  set by(value){
    this._by = value;
    console.log(this._by)
  }

  update(){
    this.counter += Number(this.by);
  }

  constructor() { }

  ngOnInit() {
  }
}