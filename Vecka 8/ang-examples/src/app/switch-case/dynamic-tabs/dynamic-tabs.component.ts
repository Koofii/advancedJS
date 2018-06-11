import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-tabs',
  templateUrl: './dynamic-tabs.component.html',
  styleUrls: ['./dynamic-tabs.component.css']
})
export class DynamicTabsComponent implements OnInit {

 @Input() tabs
 @Input() currentTab 

  constructor() { }

  ngOnInit() {
  }

}
