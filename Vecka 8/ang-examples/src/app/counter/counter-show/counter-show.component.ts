import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'counter-show',
  templateUrl: './counter-show.component.html',
  styleUrls: ['./counter-show.component.css']
})
export class CounterShowComponent implements OnInit {

  @Input() currentCount: number;

  constructor() { }

  ngOnInit() {
    if (this.currentCount === undefined) {
      throw new Error('Must provide value for input property currentCount');
    }
  }

}
