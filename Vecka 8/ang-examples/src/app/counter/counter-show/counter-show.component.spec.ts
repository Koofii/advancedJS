import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterShowComponent } from './counter-show.component';

describe('CounterShowComponent', () => {
  let component: CounterShowComponent;
  let fixture: ComponentFixture<CounterShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
