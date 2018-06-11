import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {

  isClicked = true;

  changeBoolean(){
    this.isClicked = !this.isClicked
  }

  constructor() { }

  ngOnInit() {
  }

}
