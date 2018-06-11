import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {

  products = [
    {
      id: 1,
      name: 'JS2001'
    },
    {
      id: 2,
      name: 'JS2002'
    },
    {
      id: 3,
      name: 'JS2003'
    },
    {
      id: 4,
      name: 'JS2004'
    },
    {
      id: 5,
      name: 'JS2005'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
