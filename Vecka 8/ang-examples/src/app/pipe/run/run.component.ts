import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {

  time = {
    date: null
  }

  date;
  

  constructor() { }

  ngOnInit() {
    this.date = Observable.interval(1000)
      .map(() => new Date())
  }

}
