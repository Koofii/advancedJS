import { Component } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [ // name of animation to trigger
      state('visible', style({ opacity: 1 })),  // animation states (only one state - 'visible' - in this example)
      transition(':enter', [ // transition from unmounted to 'visible' state
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('500ms ease-in')
      ])
    ])
  ]
})
export class AppComponent {
  titles = [];

  nextId = 0;

  addTitle(title) {
    this.titles.push({ id: this.nextId++, title });
  }

  removeTitle(title) {
    this.titles = this.titles.filter(t => t.id !== title.id);
  }
}
