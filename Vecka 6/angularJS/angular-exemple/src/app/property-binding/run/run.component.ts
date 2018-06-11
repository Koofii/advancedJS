import { Component, OnInit } from '@angular/core';
import { getLocaleNumberSymbol } from '@angular/common';

@Component({
  selector: 'app-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.css']
})
export class RunComponent implements OnInit {
  
  title = 'Property Binding Example';
  imageUrl = 'http://via.placeholder.com/350x150'

  _isActive;

  numberOfTimesHovered = 0;

  get isActive(){
    return this._isActive;
  }

  set isActive(value){
    this._isActive = value;
    value && ++this.numberOfTimesHovered;
  }


  constructor() { }

  ngOnInit() {
  }
  buttonClicked(event){
    console.log('Number of times hovered: ' + this.numberOfTimesHovered)
    this.numberOfTimesHovered = 0;
  }
}
