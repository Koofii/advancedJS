import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-count',
  templateUrl: './show-count.component.html',
  styleUrls: ['./show-count.component.css']
})
export class ShowCountComponent implements OnInit {
  
  @Input() number

  constructor() { }

  ngOnInit() {
  }

}
