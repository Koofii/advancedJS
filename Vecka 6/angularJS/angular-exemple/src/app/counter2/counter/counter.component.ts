import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  _by = 1;

  @Output() countObj = new EventEmitter();


  get by(){
    return this._by;
  }

  set by(value){
    this._by = value;
  }
  
  update(){
    this.countObj.emit(this.by)
  }

  constructor() { }

  ngOnInit() {
  }

}
